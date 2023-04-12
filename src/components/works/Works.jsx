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

var arrowPrev = document.querySelector('.swiper-button-prev');
var arrowNext = document.querySelector('.swiper-button-prev');

if (MediaQueryList.l < 4) {
    arrowPrev.style.display = 'none';
    arrowNext.style.display = 'none';
}

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
              <div className="unity responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img src="assets/unityicon.png" alt=""></img>
                    </div>
                    <h1>Unity</h1>
                    <span className="description">
                      Unity is something that excited me for a very long time. I
                      really enjoy studying the approach that the developers take to
                      create an extremely versatile engine that can support
                      2D,3D, VR and AR games. Unity also comes packaged with
                      absolutely buttery graphics and an extremely great
                      community. I also dabble into 3D model
                      rendering and occasionaly help on some indie game projects.
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
              <div className="ml responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img className="ml" src="assets/MLicon.png" alt=""></img>
                    </div>
                    <h1 className="ml-title">Machine Learning</h1>
                    <span className="mldesc">
                      I would argue that Machine learning is going to
                      change the world some day. Machine learning combines
                      statistics, data mining, and computer learning and meshes
                      them into a unique way to observe and manipulate data.
                      Data is only getting bigger as the world grows and being
                      able to come up with intelligent decisions based on data
                      will help improve quality of life for everyone.
                    </span>
                  </div>
                  <div className="right col">
                    <a href="https://www.techtarget.com/searchenterpriseai/definition/machine-learning-ML#:~:text=Machine%20learning%20(ML)%20is%20a,to%20predict%20new%20output%20values.">
                      <img className="machinelearning" src="assets/MLmain.png" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog responsive-container">
                <div className="row">
                  <div className="left col">
                    <div className="imagewrapper">
                      <img src="assets/blogicon.png" alt=""></img>
                    </div>
                    <h1 className="blog-title">Blogging</h1>
                    <span className="blogdesc description">
                      My dev blog is something that has really inspired me to
                      build things in public and showcase the type of work that
                      I have been doing. It's something that has really helped
                      me embrace the reality of being a programmer and something
                      that I love doing. I was always so interested in reading
                      updates and patch notes for my favorite games, so this was
                      something that I really wanted to start in my off time.
                    </span>
                  </div>
                  <div className="right col">
                    <a href="https://github.com/ValRobichaux/devBlog">
                      <img className="blogimg" src="assets/blogmain.png" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
