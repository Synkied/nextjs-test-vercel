import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../types/general";

export default function ProductDetailPage(props: { product: IProduct }) {
    const { product } = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {product.id}
            {product.name}
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/products/`);
    const products = await res.json();

    const paths = products.results.map((product: IProduct) => {
        return {
            params: {
                id: product.id,
            },
        };
    });

    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/products/${params?.id}`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
};
