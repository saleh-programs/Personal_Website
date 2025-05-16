import {Link, useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import styles from '../../styles/components/Navbar.module.css'
function Navbar(){
  const location = useLocation();
  useEffect(()=>{
    document.getElementById(location.pathname).classList.add(styles.highlight);
    return ()=>{
      document.querySelector(`.${styles.highlight}`).classList.remove(styles.highlight);
    }
  },[location.pathname])
  return(
      <div className={styles.navbar}>
        <Link to='/' id='/' className={styles.link} style={{flexBasis:'0%'}}>Home</Link>
        <Link to='/education' id='/education'  className={styles.link}>Education</Link>
        <Link to='/projects' id='/projects'  className={styles.link}>Projects</Link>
        <Link to='/experience' id='/experience'  className={styles.link}>Experience/Skills</Link>
      </div>
  );
}

export default Navbar;