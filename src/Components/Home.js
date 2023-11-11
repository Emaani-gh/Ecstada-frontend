import React, { useContext } from "react";
import Hero from "./Hero";
import img from './home-shoe-2.png'
import Products from "./Products";
import Context from "./Context";

function Home() {

  const {products} = useContext(Context).state

  return (
    <div>
        <Hero />

        <Products />

    </div>
  );
}

export default Home;
