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
          <img src="assets/Buddy_alloc.jpg" alt=""></img>
          <h3>Buddy Allocator</h3>
        </div>
        <div className='item'>
          <img src="assets/clientservermodel.jpg" alt=""></img>
          <h3>Client Server Access</h3>
        </div>
        <div className='item'>
          <img src="assets/linux shell.jpg" alt=""></img>
          <h3>Custom Linux shell</h3>
        </div>
        <div className='item'>
          <img src="assets/TCP and IP.jpg" alt=""></img>
          <h3>TCP and IP protocol communication</h3>
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
