import React, { Fragment } from 'react'

const Menu = ({ item }) => {
  return (
    <Fragment>
      {item.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title}/>
            <div className="item-info">
              <div className="header">
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4> 
              </div>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default Menu;
// const Item=({item})=>{
// return(
//   item.map((menu)=>{
//     const{id,title,img,desc,price}=menu;
//     return(
      // <article key={id} className="menu-item">
      //       <img src={img} alt={title}/>
      //       <div className="item-info">
      //         <div className="header">
      //           <h4>{title}</h4>
      //           <h4 className='price'>{price}</h4> 
      //         </div>
      //         <p className="item-text">{desc}</p>
      //       </div>
      //     </article>
//     )
//   })
//   )    
//         }

// export default Item;

