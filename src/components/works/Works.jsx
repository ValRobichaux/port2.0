import "./Works.scss";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
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
      <div className="responsive-container">
        <div className="row">
          <Swiper
            spaceBetween={500}
            slidesPerView={1}
            speed={1000}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img src="assets/unityicon.png" alt=""></img>
                    </div>
                    <h1>Unity</h1>
                    <span className="description">
                      Unity is something that excited me for a very long time, I
                      really like the approach that the developers have used to
                      create an extremely versatile engine that can support
                      2D,3D, VR and AR games. Unity also comes along with
                      absolutely buttery graphics and an extremely great
                      community. I definitely would like looking into 3D model
                      rendering and help on some indie game projects
                    </span>
                  </div>
                  <div className="right col">
                    <a href="https://unity.com">
                      <img src="assets/unitylogo.png" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img src="assets/unityicon.png" alt=""></img>
                    </div>
                    <h1>Unity</h1>
                    <span className="description">
                      Unity is something that excited me for a very long time, I
                      really like the approach that the developers have used to
                      create an extremely versatile engine that can support
                      2D,3D, VR and AR games. Unity also comes along with
                      absolutely buttery graphics and an extremely great
                      community. I definitely would like looking into 3D model
                      rendering and help on some indie game projects
                    </span>
                  </div>
                  <div className="right col">
                    <a href="https://unity.com">
                      <img src="assets/unitylogo.png" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img src="assets/unityicon.png" alt=""></img>
                    </div>
                    <h1>Unity</h1>
                    <span className="description">
                      Unity is something that excited me for a very long time, I
                      really like the approach that the developers have used to
                      create an extremely versatile engine that can support
                      2D,3D, VR and AR games. Unity also comes along with
                      absolutely buttery graphics and an extremely great
                      community. I definitely would like looking into 3D model
                      rendering and help on some indie game projects
                    </span>
                  </div>
                  <div className="right col">
                    <a href="https://unity.com">
                      <img src="assets/unitylogo.png" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div
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
    
    </div> */}
    </div>
  );
}
