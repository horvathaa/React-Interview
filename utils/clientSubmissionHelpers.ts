import { NextApiRequest, NextApiResponse } from 'next';

export const submissionRequestValid = (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (!req.body) {
        res.status(400).json({ data: 'Invalid Body Data or Submission Type.' });
        return false;
    }

    return true;
};
