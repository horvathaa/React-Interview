import { NextApiRequest, NextApiResponse } from 'next';
import { getData } from '../../../../utils/axiosClientWrapper';
import { apiErrorHandler } from '../../../../utils/errorHandlers';
import { convertSingleNestedObjectToUrlRequest } from '../../../../utils/urlConversionHelpers';
import { submissionRequestValid } from '../../../../utils/clientSubmissionHelpers';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb',
        },
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        if (!submissionRequestValid(req, res)) return;

        let path = req.query.path as string;

        delete req.query.path;

        let newPath = convertSingleNestedObjectToUrlRequest(
            {
                ...req.query,
            },
            path
        );

        return getData(null, newPath)
            .then((resp) => {
                if (apiErrorHandler(resp, res)) return;
                return res.status(200).json({ data: resp.data });
            })
            .catch((error) => {
                return res.status(400).json({ data: error });
            });
    } else {
        return res.status(400).json({ data: 'Invalid Http Method' });
    }
}
