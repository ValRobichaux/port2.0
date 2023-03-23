import "./Works.scss";
import { workData } from "../worksdata";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        );
  };

  const worksRef = useRef(null);
  const worksItems = useRef([]);

  useLayoutEffect(() => {
    const items = worksItems.current;
    if (items.length > 0) {
      gsap.set(items, { opacity: 0, y: "100%" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: worksRef.current,
            start: "top center+=100",
          },
        })
        .to(items, {
          opacity: 1,
          y: "0%",
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        });
    }
  }, []);

  return (
    <div className="works" id="works" ref={worksRef}>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((d, index) => (
          <div className="responsive-container" key={d.key}>
            <div className="row">
              <div
                className="item"
                ref={(el) => (worksItems.current[index] = el)}
              >
                <div className="left col">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>
                      {d.title}
                      <p>{d.description}</p>
                    </h2>
                  </div>
                </div>
                <div className="right col">
                  <a href={d.weblink} target="_blank" rel="noopener noreferrer">
                    <img src={d.img} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/downarrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/downarrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      ></img>
    </div>
  );
}
