import {useState,useRef,useEffect, useLayoutEffect} from 'react'
import styles from '../../styles/pages/Projects.module.css'

import Bar from '../components/Bar.jsx'

function Projects(){
  return(
    <>
      <div className={styles.intro}>
        <div className={styles.title}>
          Personal Projects
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <div className={styles.info}>
          This page provides a general breakdown of various personal projects I've worked on. A description and list of involved concepts is provided.<br/><br/>
          Select an option to learn more!
        </div>
      </div>
      <Bar name='Car Maintenance App' contentID= 'carMaintenance' link={["Try the website!","https://carmaintenanceproject.netlify.app/"]}/>
      <Bar name='File Adventurer' contentID= 'fileAdventure' link={["Download / Play the game!","./downloads/PhysicsPracticeGame.zip"]}/>
      <Bar name='Physics Practice Tool' contentID= 'physicsTool' link={["Download / Play the game!","./downloads/PhysicsPracticeGame.zip"]}/>
      <Bar name='Platformer Game' contentID= 'platformer'/>
      <Bar name=' Inflation Predictor with ML' contentID= 'stockMarket'/>
    </>
  )};  

export default Projects; 