import { GlobalContext, ProductProps } from "../../../../contexts/GlobalContext";
import * as Style from "./Products.styles";
import SingleProduct from "./SingleProduct";
import { useContext } from "react";

function Products() {
    const { product } = useContext(GlobalContext)

    return (
        <Style.Products>
            <h2>Nossos cafés</h2>

            <article>
                {
                    product?.map(product => {
                        return <SingleProduct
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            tags={product.tags}
                            imagePath={product.imagePath}
                        />
                    })
                }
            </article>
        </Style.Products>
    );
}

export default Products;