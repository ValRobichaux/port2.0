import { useEffect, useState } from "react";
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss'
import {
  featuredPortfolio,
  schoolPortfolio,
  personalPortfolio,
  otherPortfolio} from "../portfoliodata";


export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);

    
  const list = [
    {id: "featured",title: "Featured"},
    {id: "school work",title: "School Work"},
    {id: "personal work",title: "Personal Work"},
    {id: "other",title: "Other"},
  ];

  useEffect(()=>{

    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "school work":
        setData(schoolPortfolio);
        break;
      case "personal work":
        setData(personalPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
        default:
          setData(featuredPortfolio);
    }

  },[selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title} 
            active={selected === item.id}
            setSelected={setSelected}
            id = {item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map(d=> (
          <div className='item'>
          <img 
            src={d.img} 
            alt=""/>
          <h3>{d.title}</h3>
        </div>
          ))}
      </div>
    </div>
  )
}
