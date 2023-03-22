import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { gsap } from "gsap";
import {
  featuredPortfolio,
  schoolPortfolio,
  personalPortfolio,
} from "../portfoliodata";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "school work", title: "Security Work" },
    { id: "personal work", title: "Personal Work" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "school work":
        setData(schoolPortfolio);
        break;
      case "personal work":
        setData(personalPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.key}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a
            href={d.weblink}
            key={d.key}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="animate pop item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
