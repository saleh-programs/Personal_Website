import {useState,useRef,useEffect, useLayoutEffect} from 'react'
import '../../styles/pages/Projects.css'

import Bar from '../components/Bar.jsx'


function Projects(){
  return(
    <>
      <div className='projectsintro'>
        <div className='projectsintro-title'>
          Personal Projects
        </div>
        <hr className='hz-separator'>
        </hr>
        <div className='projectsintro-info'>
          This page provides a general breakdown of various personal projects I've worked on. A description and list of involved concepts is provided.<br/><br/>
          Select an option to learn more!
        </div>
      </div>
      <Bar name='Car Maintenance App' id= 'carmaintenance'/>
      <Bar name='Platformer Game' id= 'pygame'/>
      <Bar name=' Inflation Predictor with ML' id= 'stockmarket'/>
    </>
  )};  

export default Projects; 