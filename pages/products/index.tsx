import { GetServerSideProps } from "next";
import Link from "next/link";
import { IProduct } from "../../types/general";

export default function ProductsHomePage(props: { products: IProduct[] }) {

    // Variables
    const { products } = props;

    return (
        <div>
            {products.map((product) => (
                <Link href={`/products/${product.id}`}>
                    <div key={product.id}>
                        {product.id}
                        {product.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    let products: IProduct[] = [];

    const res = await fetch(`${process.env.BACKEND_API_URL}/products/`);

    if (res.status === 200) {
        let productsResponse = await res.json();
        products = productsResponse.results;
    }

    return {
        props: {
            products,
        },
    };
}
