import { useEffect, useState } from "react";
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss'

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
  const list = [
    {id: "featured",title: "Featured"},
    {id: "school work",title: "School Work"},
    {id: "personal work",title: "Personal Work"},
    {id: "other",title: "Other"},
  ];
  
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
        <div className='item'>
          <img src="assets/Buddy_alloc.jpg" alt=""></img>
          <h3>Buddy Allocator</h3>
        </div>
        <div className='item'>
          <img src="assets/clientservermodel.jpg" alt=""></img>
          <h3>Client Server Access</h3>
        </div>
        <div className='item'>
          <img src="assets/linux shell.jpg" alt=""></img>
          <h3>Custom Linux shell</h3>
        </div>
        <div className='item'>
          <img src="assets/TCP and IP.jpg" alt=""></img>
          <h3>TCP and IP protocol communication</h3>
        </div>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
        </div>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
        </div>
      </div>
    </div>
  )
}
