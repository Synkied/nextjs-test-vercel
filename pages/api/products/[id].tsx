// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../types/general'
import products from '../../data/products'

let product = {id: -1, name: ""}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IProduct | Object>
) {
    const { id } = req.query
    let result = products.find(product => product.id.toString() === id )
    if (result) {
        product = result
    }

    res.status(200).json(product)
}
