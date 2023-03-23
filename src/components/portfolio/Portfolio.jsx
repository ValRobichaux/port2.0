import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  featuredPortfolio,
  schoolPortfolio,
  personalPortfolio,
} from "../portfoliodata";

gsap.registerPlugin(ScrollTrigger);

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

  const portfolioRef = useRef(null);
  const portfolioItems = useRef([]);

  useLayoutEffect(() => {
    const items = portfolioItems.current;
    if (items.length > 0) {
      gsap.set(items, { opacity: 0, y: "100%" });
      gsap.timeline({
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top center+=100",
        },
      }).to(items, {
        opacity: 1,
        y: "0%",
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [data]);

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
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
        {data.map((d, index) => (
          <a
            href={d.weblink}
            key={d.key}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (portfolioItems.current[index] = el)}
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
