import { GlobalContext, userCartList } from "../../contexts/GlobalContext";
import { QuantityButtonStyle } from "./QuantityButtonStyle.styles";
import { useContext } from "react";

interface QuantityButtonProps {
    id: string,
}

function QuantityButton({ id }: QuantityButtonProps) {
    const { userData, handleCartListChange } = useContext(GlobalContext);
    let selectedItem = userData?.userCartList.find(item => item.id == id)

    return (
        <QuantityButtonStyle>
            <button onClick={() => handleCartListChange(id, 'add')}>+</button>
            
            {
                selectedItem? <p>{selectedItem.quantity}</p> : <p>0</p>
            }

            <button onClick={() => handleCartListChange(id, 'subtract')}>-</button>
        </QuantityButtonStyle>
    );
}

export default QuantityButton;