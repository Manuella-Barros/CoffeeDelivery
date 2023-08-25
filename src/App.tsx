import { ThemeProvider } from "styled-components"
import Home from "./pages/home/Home"
import { light } from "./styles/themes/light"
import { GlobalStyle } from "./styles/global/GlobalStyle.styles"
import Navbar from "./componentes/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Purchase from "./pages/purchase/Purchase"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import Success from "./pages/success/Success"
import { ProtectedRoutePurchase, ProtectedRouteSuccess } from "./ProtectedRoutes/ProtectedRoute"

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={light}>

            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/purchase" element={
                <ProtectedRoutePurchase><Purchase/></ProtectedRoutePurchase>
              }/>
              <Route path="/success" element={
                <ProtectedRouteSuccess><Success/></ProtectedRouteSuccess>
              }/>
            </Routes>
          <GlobalStyle/>

        </ThemeProvider>
      </BrowserRouter>  
    </GlobalContextProvider>
  )
}

export default App
