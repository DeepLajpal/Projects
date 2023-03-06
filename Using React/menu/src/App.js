import React, { useState, useEffect } from "react";
import menu from "./data";
import Menu from "./Menu-item";
import Categories from "./categories";

const allCategories=['all',...new Set(menu.map((item)=>item.category))]

function App() {
  const [data, setData] = useState(menu);
  const [categories, setCategories]=useState(allCategories)

 const filterCategory=(category)=>{
  if(category==='all'){
    setData(menu);
    return;
  }
  const filteredCategory=menu.filter((item)=>item.category===category);
  setData(filteredCategory);
 };

    return (
      <div className="container">
        <h1>our menu</h1>
        <Categories filterCategory={filterCategory} allCategories={categories}/>
        <div className="menu-items">
          <Menu item={data} />
        </div>
      </div>
    );
  }


export default App;
