// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../types/general'

let data = [{id: 1, name: "OnePlus 5"}, {id: 2, name: "iPhone 14"}]
let product = {id: -1, name: ""}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IProduct | Object>
) {
    const { id } = req.query
    let result = data.find(product => product.id.toString() === id )
    if (result) {
        product = result
    }

    res.status(200).json(product)
}
