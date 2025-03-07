import { useState,useEffect,useRef } from 'react';
import '../../styles/components/Bar.css'

import tractor from '../assets/images/tractor.png'
import wsu from '../assets/images/wsu.png'
import C from '../assets/images/C.png'
import Java from '../assets/images/Java.png'
import Python from '../assets/images/Python.png'
import YAA from '../assets/images/YAA.jpeg'
import Rosa from '../assets/images/rosa.jpeg'
import car1 from '../assets/images/carMain1.jpg'
import car2 from '../assets/images/carMain2.gif'
import car3 from '../assets/images/carMain3.gif'
import pygame1 from '../assets/images/pygame1.gif'
import pygame2 from '../assets/images/pygame2.gif'
import pygame3 from '../assets/images/pygame3.gif'
import pygame4 from '../assets/images/pygame4.gif'
import decisionTree from '../assets/images/DecisionTree.jpg'
import ANN from '../assets/images/ANN.jpg'
import TreeAndANN from '../assets/images/TreeAndANN.jpg'
import lagelati from '../assets/images/lagelati.jpg'
import hat from '../assets/images/hat.jpg'
import fordTranscript from "../assets/documents/fordsonTranscript.pdf"
import wayneTranscript from "../assets/documents/wayneTranscript.pdf"

function InnerContent(props){
  if (props.id == 'fordson'){
    return(
      <div className='inside'>
        <div className='rowcontainer'>
          <div className='left'>
            GPA: 3.9 / 4.0 <br/>
            <a href={fordTranscript} target='_blank'>Official Transcript</a>
          </div>
          <div className='right'>
            <img src={tractor} alt="not found" />
          </div>
        </div>
      </div>
    );
  }else if (props.id == 'wayne'){
    return(
      <>
      <div className='inside'> 
        <div className='columncontainer'>
          <div className='rowcontainer'>
            <div className='left'>
              Major: Computer Science<br/>
              GPA: 4.0 / 4.0 <br/>
              <a href={wayneTranscript} target='_blank'>Official Transcript</a>
            </div>
            <div className='right'>
              <img style={{'overflow':'hidden','width':'350px'}} src= {wsu} alt="yuh" />
            </div>
          </div>
          <div className='rowcontainer'>
            <div className='left'>
            Relevant Courses: <br />
            &bull; Python / Java / C++ / C Programming <span style={{fontSize:'.8em'}}>(4 courses)</span><br/>
            &bull; Computer Science 1 & 2<br />
            &bull; Basic Engineering 1 & 3<br />
            &bull; Computer Architecture & Organization<br />
            &bull; Algorithm Design & Analysis<br />
            &bull; Fundamental Structures in CS<br />
            &bull; Software Engineering<br />
          </div>
          <div className='right'>
            <div style={{'display':'flex',justifyContent:'center',alignItems: 'center','height':'100%'}}>
              <img style={{'width':'350px'}} src={C} alt="not found" />
              <img style={{'width':'350px'}} src={Java} alt="npt found" />
              <img style={{'width':'250px'}} src={Python} alt="npt found" />
            </div>
          
          </div>
          </div>
        </div>
      </div>
      </>
    );
  }else if (props.id == 'achievements'){
    return(
      <div className='inside'>
        <div className='columncontainer'>
          <div className='rowcontainer'>
          <div className='left'>
            &bull;Rosa Parks Scholarship<br/>
            <div style={{fontSize:'.8em', paddingInline:'50px',marginTop:'20px',width:'60%'}}>
              Awarded for showing academic excellence, leadership, and community involvement.<br/><br/>
            </div>
          </div>
          June 2022
          <img className='right' style={{width:'20%'}} src={Rosa} alt="" />
        </div>
          <div className='rowcontainer'>
          <div className='left'>
            &bull;Yemeni American Association Scholarship<br/>
            <div style={{fontSize:'.8em', paddingInline:'50px',marginTop:'20px',width:'60%'}}>
              Awarded for showing academic excellence and being an active Yemeni American community member.<br/><br/>
            </div>
          </div>
          August 2022
          <img className='right' style={{width:'20%'}} src={YAA} alt="" />
          </div>
        </div>
      </div>
    );
  }else if (props.id == 'carmaintenance'){
    return(
      <div className='inside'>
        <div className='columncontainer'>
          <div className='rowcontainer topimages'>
            <img src={car1} alt="" />
            <img src={car2} alt="" />
            <img src={car3} alt="" />
          </div>
          <div className='rowcontainer'>
            <div className='description'>
              <h2 >Description</h2>
              Get reminders to service your vehicle and keep track of what needs maintenance!
              <br/><br/>
              Gained skills in backend and frontend development, along with REST APIs and databases.<br/>
              <a href="https://github.com/saleh-programs/Car_Maintenance.git" target='_blank'>Github Repo</a>
            </div>
            <div className='concepts'>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Create Account/ Log In/ Find Local Services</li>
                <li>Validation Checking</li>
                <li>User database (SQLite)</li>
                <li>Frontend (React)</li>
                <li>Backend (NodeJS/Express)</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }else if (props.id == 'pygame'){
    return(
      <div className='inside'>
        <div className='columncontainer'>
          <div className='rowcontainer topimages'>
            <img src={pygame1} alt="" />
            <img src={pygame2} alt="" />
            <img src={pygame3} alt="" />
            <img src={pygame4} alt="" />
          </div>
          <div className='rowcontainer'>
            <div className='description'>
              <h2>Description</h2>
              A Hollow Knight inspired game made in Pygame with custom animations! The player can slash, shoot, and swing faced against enemies with unique logic!
              <br/><br/>
              Gained skills navigating a large project and working with more complex solutions.<br/>
              <a href="https://github.com/saleh-programs/Platformer_Game.git" target='_blank'>Github Repo</a>
            </div>
            <div className='concepts'>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Motion Physics</li>
                <li>State Management</li>
                <li>Health/Damage System</li>
                <li>Camera System</li>
                <li>Melee, Shooting, and Grappling Hook Mechanics</li>
                <li>Enemy Behavior Logic</li>
                <li>Performance Optimizations</li>
                <li>Tiled (for map editing)</li>
                <li>Pygame Library</li>
                <li>Created in Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }else if (props.id == 'stockmarket'){
    return(
      <div className='inside'>
        <div className='columncontainer'>
          <div className='rowcontainer topimages'>
            <img src={decisionTree} style={{width:'25%' }} alt="" />
            <img src={ANN}alt="" />
            <img src={TreeAndANN} alt="" />
          </div>
          <div className='rowcontainer'>
            <div className='description'>
              <h2>Description</h2>
              Used 2 machine learning models (ANN and Decision Tree) to analyze trends in individual CPI sectors (gasoline, food, energy, etc.) and predict if overall inflation will rise. The F1 scores (performance scores) for both models are provided.<br/><br/>
              ANN model: 92% <br/>
              Decision Tree Model: 80%<br/>
              <a href="https://github.com/saleh-programs/Inflation_Predictor.git" target='_blank'>Github Repo</a>
            </div>
            <div className='concepts'>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Artificial Neural Networks</li>
                <li>Decision Trees</li>
                <li>Data preprocessing</li>
                <li>Data visualzation</li>
                <li>Libraries: Keras/TensorFlow/SKlearn/Pandas/Matplotlib</li>
                <li>Created in Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }else if (props.id == 'lagelati'){
      return(
        <div className='inside'>
          <div className='rowcontainer'>
            <div style={{flex:'1',fontSize:'.8em'}}>
              Working in an ice cream store didn't involve software, but rather meeting new people on a daily basis. It consisted of: 
              <ul>
                <li>Resolving customer conflicts</li>
                <li>Coordinating with a team</li>
                <li>A fast paced environment</li>
                <li>Quick and critical thinking</li>
                <li>Quick and efficient solutions</li>
                <li>Efficient communication</li>
              </ul>

            </div>
            <div className='workimages' style={{flex:'1'}}>
              <img src={lagelati} alt="" />
              <img src={hat} style={{width:'30%'}} alt="" />

            </div>
          </div>
        </div>
      );
  }
}

function Bar(props){
  const [status,setStatus] = useState(false);
  const elem = useRef(null);
  

  function handleClick(){
    setStatus(!status);
  }
  return(
      <>
        <div className='absRedirect'>
          <div className={`dropdown ${status ? "rotateDropdown":""}`} onClick={handleClick} style={{}}>
            &gt;
          </div>
        </div>
        <div ref={elem} id={props.id} className="bar" style={{height: status ? elem.current.scrollHeight+"px" : "60px"}} onClick={handleClick}>
          <div className='rowcontainer' style={{marginBottom:"20px"}}>
            <div className='left'>
              {props.name}
            </div>
            <div className='right'>
                {props.date}
            </div>
          </div>
          <InnerContent id = {props.id}/>
      </div>
    </>
  );
}


export default Bar;