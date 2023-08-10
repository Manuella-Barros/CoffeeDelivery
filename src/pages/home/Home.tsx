import getCepInformation from "../../fetch/getCepInfo";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function Home() {
    
    getCepInformation()

    return (
        <>
            <Header/>
            <Products/>
        </>
    );
}

export default Home;