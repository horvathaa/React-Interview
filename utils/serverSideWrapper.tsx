import { AxiosError, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';

const fetchDataFromApi = async (
    access_token: string | null,
    dataFetch: {
        (
            access_token: string | null,
            path: string,
            args?: any
        ): Promise<AxiosResponse<any, any>> | Promise<AxiosError<any, any>>;
    },
    path: string | null,
    args?: any
) => {
    //todo error responses
    try {
        let res;
        if (path) res = await dataFetch(access_token, path, args);

        if (res instanceof AxiosError) {
            //connection refused
            if (
                (res as AxiosError).code &&
                (res as AxiosError).code == 'ECONNREFUSED'
            ) {
                return {
                    props: {
                        connectionError:
                            'Connection to Database Server Refused. The service is either down or cannot be reached. Contact IT',
                    },
                };
            } else if ((res as AxiosError).response?.status == 401) {
            }
            return {
                props: {
                    connectionError:
                        'ERROR 401: Connection to Database Server Refused. You do have proper access to the site. Contact IT',
                },
            };
        } else if ((res as unknown as AxiosError).response?.status == 400) {
            //error thrown from our server to end user
            return {
                props: {
                    error: (res as unknown as AxiosError).response?.data,
                },
            };
        }

        if (res?.status == 400) {
            console.log(
                'true',
                (res as unknown as AxiosError).response?.status == 400
            );
        }
        const data = (res as AxiosResponse).data;

        if (!data || data.length == 0) {
            return {
                props: {},
            };
        }

        return !data ? { props: {} } : { props: { data } };
    } catch (e) {
        throw new Error('error');
    }
};

export default async function serverSideWrapper(
    context: GetServerSidePropsContext | undefined,
    dataFetch: {
        (
            access_token: string | null,
            path: string,
            items?: any
        ): Promise<AxiosResponse<any, any>>;
    } | null,
    path: string | null,
    args?: any
) {
    if (!context) {
        throw new Error('Context is undefined');
    }

    if (dataFetch == null) {
        throw new Error('Data Fetch is null');
    }

    if (dataFetch != null) {
        var res = await fetchDataFromApi(
            null,
            dataFetch,
            path,
            args ?? undefined
        );

        return (res as any)?.props?.connectionError
            ? new Error('Connection Error')
            : res;
    }

    return { props: {} };
}
