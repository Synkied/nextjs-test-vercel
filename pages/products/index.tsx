import { GetServerSideProps } from "next";
import Link from "next/link";
import { IProduct } from "../../types/general";
import {default as productsData} from "../data/products";

export default function ProductsHomePage(props: { products: IProduct[] }) {

    // Variables
    const { products } = props;

    return (
        <div>
            {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <div>
                        {product.id}
                        {product.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let products: IProduct[] = productsData

    return {
        props: {
            products,
        },
    };
}
