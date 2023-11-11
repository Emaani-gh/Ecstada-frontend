import React, { useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

export const Provider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data));

    axios
      .get("http://localhost:3000/api/category")
      .then((res) => setCategories(res.data));
  }, []);

  // console.log(categories)

  const value = {
    state: {
      products,
      categories,
    },
    actions: {},
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Context;
