import {useState,useRef,useEffect} from 'react'
import '../../styles/pages/Experience.css'

import Bar from '../components/Bar.jsx'

function Experience(){
  return(
    <>
    <div className='experienceintro'>
      <div className='experienceintro-title'>
        Experience and Skills
      </div>
      <div className='hz-separator'>
      </div>
      <div className='experienceintro-info'>
        On the left, find information on employment history and job experience, excluding any project-related work.  {/*as well as experience I have working in teams for various projects.*/}
        <br/><br/>
        On the right, find skills showcasing my capabilities.

      </div>
    </div>
    <div className='rowcontainer'>
        <div className='left' style={{flex:'4'}}>
          <Bar id='lagelati' name="La Gelati Ice Cream" date="09/2021-10/2022"/>
          </div>
        <div className='right' style={{flex:'1'}}>
          <div className='skills'>
            <h1 style={{textAlign:'center',}}>Skills</h1>
            <hr className='hz-separator'></hr>
            <ul style={{fontSize:'20px'}}>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>C</li> 
              <li>HTML, CSS, Javascript</li>
              <li>React</li>
              <li>NodeJS, Express</li>
              <li>SQL, SQLite</li>
              <li>Git/Github</li>
              <li>Postman (API testing)</li>
              <li>Data Management</li>
              <li>Frontend Web Development</li>
              <li>Backend Web Development</li>
              <li>Game Development</li>
              <li>Maachine Learning</li>
              <li>Pandas, Numpy, Matplotlib, Tensorflow, Scikit-learn</li>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Adaptable</li>
              <li>Excel</li>
              <li>PowerPoint</li>
              <li>Word</li>
              <li>English/Arabic</li>
              <li>Team Collaboration</li>
              <li>Team Leadership</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
      
    </div>
  </>
  );
}

export default Experience;