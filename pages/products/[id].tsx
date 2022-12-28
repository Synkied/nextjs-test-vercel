import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/products/${context?.params?.id}`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
};
