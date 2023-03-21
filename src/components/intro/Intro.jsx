import "./Intro.scss";
import Typewriter from "typewriter-effect";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div id='particles-js'></div>
      <div className="responsive-container">
        <div className="row">
          <div className="left col">
            <div className="imageContainer">
              <img src="assets/val.png" alt="" />
            </div>
          </div>
          <div className="right col">
            <div className="wrapper">
              <h2>Hello, I'm</h2>
              <h1>Val Robichaux</h1>
              <h3>
                {" "}
                Full-time
                <Typewriter
                  options={{
                    strings: ["Developer", "Learner", "Tech Lover"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typer",
                  }}
                />
              </h3>
            </div>
            <a href="#portfolio">
              <img src="assets/downarrow.png" alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
