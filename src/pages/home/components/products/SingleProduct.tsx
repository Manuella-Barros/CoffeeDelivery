import { ShoppingCart } from "@phosphor-icons/react";
import * as Style from "./Products.styles";
import QuantityButton from "../../../../componentes/quantityButton/QuantityButton";
import { Link } from "react-router-dom";

interface SingleProductProps {
    id: string,
    name: string,
    price: string,
    description: string,
    tags: string[],
    imagePath: string,
}

function SingleProduct({ id, name, price, description, tags, imagePath }: SingleProductProps) {

    return (
        <Style.SingleProduct>
            <Style.HeaderSingleProduct>
                <picture>
                    <img src={imagePath} alt="cafe" />
                </picture>
                <div>
                    {
                        tags?.map((tag, i) => {
                            return <p key={i}>{tag}</p>
                        })
                    }
                </div>
            </Style.HeaderSingleProduct>

            <Style.BodySingleProduct>
                <h3>{name}</h3>
                <p>{description}</p>
            </Style.BodySingleProduct>

            <Style.FooterSingleProduct>
                <Style.Price>R${price}</Style.Price>
                <QuantityButton id={id}/>
                <Link to={'/purchase'}><ShoppingCart size={20} weight="fill" /></Link>
            </Style.FooterSingleProduct>
        </Style.SingleProduct>
    )
}

export default SingleProduct;