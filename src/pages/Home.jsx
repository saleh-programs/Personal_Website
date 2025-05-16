import styles from '../../styles/pages/Home.module.css'
import portrait from '../assets/images/murad8.jpeg'
import github_icon from '../assets/images/Github_icon.png'
import LinkedIn_icon from '../assets/images/LinkedIn_icon.png'
import Handshake_icon from '../assets/images/Handshake_icon.png'
import { useEffect, useState } from 'react'

function Home(){
  return(
    <>     
    <div className={styles.title}>
      Welcome, I'm Murad Saleh!
    </div>
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <div className={styles.portrait}>
          <img src={portrait}/>
        </div>

        <div className={styles["info"]}>
          <ul>
            <div style={{textAlign:'center',lineHeight:"20px"}}>Computer Science student at Wayne State University</div><br/>
            <li>Age: 21 </li>
            <li>University Email:  hl4178@wayne.edu</li>
            <li>Personal Email: salehm0529@gmail.com</li>
            <li>Location: Dearborn, MI</li>
          </ul>
        </div>
      </div>
      <div className={styles.separator}>
      </div>
      <div className={styles["card-right"]}>
        <div className={styles.aboutme}>
          About Me
        </div>
        <div className={styles.description}>
          Hello! My name is Murad Saleh. This is a site I built to show my projects, experience, education, and a few other things that employers may be looking for.
          <br/><br/>
          I'm looking for opportunities to grow my skills in the software industry while still exploring which areas fit me best. I'm eager for a chance to get started!
        </div>
        <div className={styles.links}>
          <a className={styles["img-container"]} href="https://github.com/saleh-programs" target='_blank'>
            <img src={github_icon} alt='Github link not found'/>
            Github:

          </a>
          <a className={styles["img-container"]} href="https://www.linkedin.com/in/murad-saleh-674722254/" target='_blank'>
            <img src={LinkedIn_icon} alt='LinkedIn icon not found'/>
            LinkedIn:

          </a>
          <a className={styles["img-container"]} href="https://app.joinhandshake.com/profiles/7a79aj" target='_blank'> 
            <img src={Handshake_icon} alt="Handshake icon not found" />
            Handshake:

          </a>


        </div>
      </div>
    </div> 
    </>
  );
}
 
export default Home; 