import axios from 'axios';
import https from 'https';

export const getData = async (access_token: string | null, path: string) => {
    if (path) return await ApiClient(access_token).get(path);
    throw new Error(`Error: NO PATH`);
};

export const postData = async (
    access_token: string | null,
    path: string,
    itemsToSave: any
) => {
    if (path && itemsToSave)
        return await ApiClient(access_token).post(path, itemsToSave);
    throw new Error(`Error: NO PATH`);
};

export const ApiClient = (
    access_token: string | null,
    baseAddress?: string,
    passedApiKey?: string
) => {
    const defaultOptions = {
        baseURL: baseAddress ?? process.env.API_ENDPOINT,
    };
    /**
     * Disable only in development mode
     */
    if (process.env.NODE_ENV === 'development') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        axios.defaults.httpsAgent = httpsAgent;
    }

    const instance = axios.create(defaultOptions);
    instance.interceptors.request.use(async (request) => {
        if (access_token) {
            request.headers.Authorization = `Bearer ${access_token}`;
        }
        let apikey = passedApiKey ?? process.env.API_KEY;

        if (apikey) {
            request.headers.ApiKey = apikey;
        }

        return request;
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return error;
        }
    );

    return instance;
};
