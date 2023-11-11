import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails/>} />
        {/* <Home /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
