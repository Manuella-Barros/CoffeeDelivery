import { QuantityButtonStyle } from "./QuantityButtonStyle.styles";

function QuantityButton() {
    return (
        <QuantityButtonStyle>
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </QuantityButtonStyle>
    );
}

export default QuantityButton;