import type { NextApiRequest, NextApiResponse } from 'next';
var pjson = require('pjson');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            return res.status(200).json({ data: pjson.version });
        } catch (e) {
            return res.status(400).json({ data: 'No Version' });
        }
    } else {
        res.status(400).json({ data: 'Invalid Http Method' });
    }
}
