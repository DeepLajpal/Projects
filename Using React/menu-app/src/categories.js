import React from 'react'

function Categories({filterCategory,allCategories}) {
  return (  
    <header>
        {allCategories.map((category,Index) =>{
        return <a href="#" key ={Index} onClick={()=>filterCategory(category)}>{category}</a>
        })}
    </header>
  )
}

export default Categories;