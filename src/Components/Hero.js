import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Context from "./Context";

const Hero = () => {
  const context = useContext(Context) 
  const {categories} = context.state

  const [showCatLinks, setShowCatLinks] = useState(false);
  const toggleCatLinks = () => {
    setShowCatLinks(!showCatLinks);
  };

  return (
    <div className="categ-section">
      <div className="container">
        <h3 className="big-header"> Our Products</h3>

        <div className="cat-mobile" onClick={toggleCatLinks}>
          <h5> categories</h5>
          <MdKeyboardArrowDown />
        </div>

        <div className="">
          <ul className={`categs ${showCatLinks ? "show-cat" : ""}`}>
            {
              categories.map((cat,index)=>(
                <li key={index}>{cat.cat_name}</li>
              ))
            }
            {/* <li>Button shirts</li>
            <li>Scarf</li>
            <li>Cargo Pant</li>
            <li>socks</li>
            <li>clothes</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
