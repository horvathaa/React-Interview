import { AxiosError, AxiosResponse } from 'axios';
import { NextApiResponse } from 'next';

/**
 * checks if a response is an error response.
 * @param resp response from api
 * @param res response to the client obj
 * @returns boolean of if the we sent an error to the client
 */
export const apiErrorHandler = (
    resp: AxiosError | AxiosResponse,
    res: NextApiResponse
): boolean => {
    if (resp instanceof AxiosError) {
        if ((resp as AxiosError).response?.status == 400) {
            res.status(400).json({
                data:
                    ((resp as AxiosError).response?.data as string | null) ??
                    'Unknown Error',
            });
            return true;
        } else if ((resp as AxiosError).response?.status == 500) {
            res.status(400).json({ data: 'Unknown Error' });
            return true;
        } else if ((resp as AxiosError)?.code == 'ECONNREFUSED') {
            res.status(400).json({
                data: 'invalid credentials please reload the page to login again.',
            });
            return true;
        }
        //the token expired
        else if (
            (resp as AxiosError).response?.headers[
                'www-authenticate'
            ]?.includes('Bearer error="invalid_token"')
        ) {
            res.status(400).json({
                data: 'invalid credentials please reload the page to login again.',
            });
            return true;
        } else {
            res.status(400).json({ data: 'Unknown Error' });
            return true;
        }
    }
    return false;
};
