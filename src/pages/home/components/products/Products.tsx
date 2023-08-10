import getSingleProduct from "../../../../fetch/getSingleProduct";
import { ProductsStyle } from "./ProductsStyle.styles";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";

interface ProductProps {
    id: string,
    name: string,
    price: string,
    description: string,
    tags: string[],
    imagePath: string,
}
function Products() {
    const [product, setProduct] = useState<ProductProps[] | null>([]);

    useEffect(() => {
        getSingleProduct()
            .then(res => setProduct(res))
    }, [])

    return (
        <ProductsStyle>
            <h2>Nossos cafés</h2>

            <article>
                {
                    product?.map(product => {
                        return <SingleProduct
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            tags={product.tags}
                            imagePath={product.imagePath}
                        />
                    })
                }
            </article>
        </ProductsStyle>
    );
}

export default Products;