import "./Intro.scss"

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/val.png" alt=""/>
          </div>
        </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Val Robichaux</h1>
          <h3>Developer</h3>
          <h3>Life long learner</h3>
          <h3>Tech lover</h3>
          <h3>Freelancer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downarrow.png" alt=""></img>
        </a>
      </div>
    </div>
      
  )
}
