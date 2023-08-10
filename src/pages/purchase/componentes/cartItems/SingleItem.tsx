import QuantityButton from "../../../../componentes/quantityButton/QuantityButton";
import { MainSingleItem, OptionsSingleItem } from "./CartItemsStyle";

function SingleItem() {
    return (
        <MainSingleItem>
            <picture>
                <img src="./images/coffes/coffee(1).png" alt="" />
            </picture>

            <OptionsSingleItem>
                <p>Expresso tradicional</p>

                <QuantityButton/>
            </OptionsSingleItem>

            <div>
                <p>R$00,00</p>
            </div>
        </MainSingleItem>
    );
}

export default SingleItem;