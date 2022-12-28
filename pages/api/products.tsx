// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from '../../types/general'



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    res.status(200).json({ results: [{id: 1, name: "OnePlus 5"}, {id: 2, name: "iPhone 14"}] })
}
