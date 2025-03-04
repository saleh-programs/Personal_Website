import {Link, useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import '../../styles/components/Navbar.css'
function Navbar(){
  const location = useLocation();
  useEffect(()=>{
    document.getElementById(location.pathname).classList.add('highlight');
    return ()=>{
      document.querySelector('.highlight').classList.remove('highlight');
    }
  })
  return(
      <div className="navbar">
        <div className="navbar-home">
          <Link to='/' id='/' className="link" >Home</Link>
        </div>
        <div className="navbar-pages">
          <Link to='/education' id='/education' className='link'>Education</Link>
          <Link to='/projects' id='/projects' className='link'>Projects</Link>
          <Link to='/experience' id='/experience' className='link'>Experience/Skills</Link>
        </div>
      </div>
  );
}

export default Navbar;