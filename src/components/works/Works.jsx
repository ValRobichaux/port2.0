import "./Works.scss"
import { workData } from "../worksdata";
import { useState } from "react";


export default function Works() {

  const [currentSlide,setCurrentSlide] = useState(0);
  const handleClick = (direction)=>{
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < workData.length - 1 ? currentSlide + 1 : 0)
  }

  return ( <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {workData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                 <div className="imgContainer">
                  <img src={d.icon} alt="" />
                  </div>
                <h2>{d.title}
                <p>{d.description}</p>
                </h2>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=""/>
            </div>
          </div>
        </div>))}
      </div> 
      <img src="assets/downarrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}></img>
      <img src="assets/downarrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}></img>

    </div>
  )
}
