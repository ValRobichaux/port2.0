import './Navbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className="left">
                <a href="#intro" className='logo'>Magic.</a>
                <div className='itemContainer'>
                  <PersonIcon className='icon'/>
                  <span>+1 (318)613-0929</span>
                </div>
                <div className='itemContainer'>
                  <EmailIcon className='icon'/>
                  <span>val.robichaux@gmail.com</span>
                </div>
            </div>

            <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                      <span className='line1'></span>
                      <span className='line2'></span>
                      <span className='line3'></span>
                    </div>
            </div>
        </div>
    </div>
  )
}
