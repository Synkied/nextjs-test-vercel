import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../types/general";
import products from "../data/products";

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
    const id  = context?.params?.id
    let product = {id: -1, name: ""}

    let result = products.find(product => product.id.toString() === id )
    if (result) {
        product = result
    }

    return {
        props: {
            product,
        },
    };
};
