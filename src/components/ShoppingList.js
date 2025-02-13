import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isOption, setOption] = useState(items);

  const selectedCategory = (category) => {
    if (category.target.value === "All"){
      setOption(items);
    }else{
    const filter = items.filter((food) => category.target.value === food.category);
    console.log(filter);
    setOption(filter);
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {isOption.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
