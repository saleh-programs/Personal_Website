import { useState,useEffect,useRef } from 'react';
import '../../styles/pages/Education.css'

import Bar from '../../src/components/Bar.jsx'


function Education(){

  return(
    <>
      <div className='educationintro'>
        <div className='educationintro-title'>
          Education
        </div>
        <hr className='hz-separator'>
        </hr>
        <div className='educationintro-info'>
          A brief breakdown of education and academic achievements that I am proud to have received.<br/><br/>
          Select an option to learn more!

        </div>
      </div>
      <Bar id='fordson' name="Fordson High School" date="09/2018 - 04/2022"/>
      <Bar id='wayne' name="Wayne State University" date="09/2022 - 04/2026"/>
      <Bar id='achievements' name="Academic Achievements" date=""/>
    </> 
  );
}

export default Education;