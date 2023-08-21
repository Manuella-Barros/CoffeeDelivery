import QuantityButton from "../../../../componentes/quantityButton/QuantityButton";
import { MainSingleItem, OptionsSingleItem } from "./CartItemsStyle";

export interface SingleItemProps {
    id: string,
    name: string,
    price: string,
    imagePath: string,
}

function SingleItem({...props}: SingleItemProps) {
    return (
        <MainSingleItem>
            <picture>
                <img src={props.imagePath} alt="" />
            </picture>

            <OptionsSingleItem>
                <p>{props.name}</p>

                <QuantityButton id={props.id}/>
            </OptionsSingleItem>

            <div>
                <p>R${props.price}</p>
            </div>
        </MainSingleItem>
    );
}

export default SingleItem;