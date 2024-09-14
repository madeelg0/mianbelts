import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import CustomOrderform from "./Components/CustomOrderform";
import Support from "./Components/Support";
import AllProduct from "./Components/AllProduct";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes> 
          <Route  path="/" element={<Home/>}/>
          <Route  path="/CustomOrderform" element={<CustomOrderform/>}/>
          <Route  path="/support" element={<Support/>}/>
          <Route  path="/AllProduct" element={<AllProduct/>}/>
          <Route  path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;


