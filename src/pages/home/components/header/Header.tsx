import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { AboutStyle, HeaderStyle } from "../../Home.styles";

function Header() {
    return (
        <HeaderStyle>
            <article>
                <h1>Encontre o café perfeito <br />para qualquer hora do dia</h1>
                <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                
                <AboutStyle>
                    <div>
                        <span><ShoppingCart size={24} weight="fill" /></span>
                        <p>Compra simples e segura</p>
                    </div>
                    <div>
                        <span><Package size={24} weight="fill" /></span>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <span><Timer size={24} weight="fill" /></span>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div>
                        <span><Coffee size={24} weight="fill" /></span>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </AboutStyle>
            </article>

            <picture>
                <img src="./images/header/header.png" alt="Copo de café" />
            </picture>
        </HeaderStyle>
    );
}

export default Header;