import './Portfolio.scss'

export default function portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio.</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Linux</li>
        <li>Ios</li>
        <li>Android</li>
        <li>Ya mama</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
        </div>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
        </div>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
        </div>
        <div className='item'>
          <img src="assets/obamium.png" alt=""></img>
          <h3>Random App</h3>
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
