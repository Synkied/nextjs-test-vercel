// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from '../../../types/general'
import products from '../../../data/products'



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    res.status(200).json({ results: products })
}
