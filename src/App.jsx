import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Usuario from "./pages/Usuario"
import ProdutoBrinquedo from "./pages/ProdutoBrinquedo"

function App() {

 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Usuario" element={<Usuario/>}/>
        <Route path="/ProdutoBrinquedo" element={<ProdutoBrinquedo/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
