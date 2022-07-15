import "./Works.scss"

export default function works() {
  return ( <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/placeholder.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Description</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/placeholder.png" alt=""></img>
            </div>
            
          </div>
        </div>
      </div>
      <img src="assets/downarrow.png" className="arrow left" alt=""></img>
      <img src="assets/downarrow.png" className="arrow right" alt=""></img>

    </div>
  )
}
