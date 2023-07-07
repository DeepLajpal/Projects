import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  list,
  contentPortfolio,
  designPortfolio,
  mobilePortfolio,
  reactjsPortfolio,
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData]= useState([]);

  useEffect(()=>{
    switch(selected){
      case "featured" :
        setData(featuredPortfolio);
        break;
      case "reactJS" :
        setData(reactjsPortfolio);
        break;
      case "mern" :
        setData(mobilePortfolio);
        break;
      case "full-Stack" :
        setData(contentPortfolio);
        break;
      case "branding" :
        setData(designPortfolio);
        break;
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

       <div className="container">
        {data.map((d)=>(
          <div className="item">
          <img src={d.img} alt={d.title + "image"} />
          <h3 ><a href={d.projectURL} target='_blank'>{d.title}</a></h3>
        </div>
        ))}
        
      </div> 
    </div>
  );
}
