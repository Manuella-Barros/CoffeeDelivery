import { ShoppingCart } from "@phosphor-icons/react";
import { BodySingleProductStyle, FooterSingleProductStyle, HeaderSingleProductStyle, SingleProductStyle } from "./ProductsStyle.styles";
import QuantityButton from "../../../../componentes/quantityButton/QuantityButton";
import { Link } from "react-router-dom";

interface SingleProductProps {
    name: string,
    price: string,
    description: string,
    tags: string[],
    imagePath: string,
}

function SingleProduct({name, price, description, tags, imagePath}: SingleProductProps) {
    return (
        <SingleProductStyle>
            <HeaderSingleProductStyle>
                <picture>
                    <img src={imagePath} alt="cafe" />
                </picture>
                <div>
                    {
                        tags.map((tag, i) => {
                            return <p key={i}>{tag}</p>
                        })
                    }
                </div>
            </HeaderSingleProductStyle>

            <BodySingleProductStyle>
                <h3>{name}</h3>
                <p>{description}</p>
            </BodySingleProductStyle>

            <FooterSingleProductStyle>
                <p>R${price}</p>
                <QuantityButton/>
                <Link to={'/purchase'}><ShoppingCart size={24} weight="fill" /></Link>
            </FooterSingleProductStyle>
        </SingleProductStyle>
    )
}

export default SingleProduct;