import React, { useState } from "react";

function Item({ name, category }) {
  const [cartItems, setCart] = useState(false);

  const handleClick = () => {
    setCart((cartItems) => !cartItems);
  }

  return (
    <li className={cartItems ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartItems ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;



