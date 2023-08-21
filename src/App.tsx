import { ThemeProvider } from "styled-components"
import Home from "./pages/home/Home"
import { light } from "./styles/themes/light"
import { GlobalStyle } from "./styles/global/GlobalStyle.styles"
import Navbar from "./componentes/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Purchase from "./pages/purchase/Purchase"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import Success from "./pages/success/Success"

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={light}>

            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/purchase" element={<Purchase/>}/>
              <Route path="/success" element={<Success/>}/>
            </Routes>
          <GlobalStyle/>

        </ThemeProvider>
      </BrowserRouter>  
    </GlobalContextProvider>
  )
}

export default App
