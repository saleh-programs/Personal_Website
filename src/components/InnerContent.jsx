
import styles from "../../styles/components/InnerContent.module.css"
import tractor from '../assets/images/tractor.png'
import wsu from '../assets/images/wsu.png'
import C from '../assets/images/C.png'
import Java from '../assets/images/Java.png'
import Python from '../assets/images/Python.png'
import YAA from '../assets/images/YAA.jpeg'
import Rosa from '../assets/images/rosa.jpeg'
import car1 from '../assets/images/carMain1.gif'
import car2 from '../assets/images/carMain2.gif'
import car3 from '../assets/images/carMain3.gif'
import car4 from '../assets/images/carMain4.gif'
import physics1 from '../assets/images/physicsGame1.gif'
import physics2 from '../assets/images/physicsGame2.gif'
import physics3 from '../assets/images/physicsGame3.gif'
import physics4 from '../assets/images/physicsGame4.gif'
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
import fileadv1 from "../assets/images/fileadv1.gif" 
import fileadv2 from "../assets/images/fileadv2.gif" 
import fileadv3 from "../assets/images/fileadv3.gif" 
import fileadv4 from "../assets/images/fileadv4.gif" 

function FordsonEducation(){
  return(
    <div className={styles.inside}>
      <div className='rowcontainer'>
        <div>
          GPA: 3.9 / 4.0<br/><br />
          <a href={fordTranscript} target='_blank'>Official Transcript</a>
        </div>
        <div>
          <img src={tractor} alt="not found" />
        </div>
      </div>
    </div>
  );
}
function WayneEducation(){
    return(
      <div className={styles.inside}> 
        <div className="rowcontainer">
          <div>
            Major: Computer Science<br/>
            GPA: 4.0 / 4.0 <br/><br />
            <a href={wayneTranscript} target='_blank'>Official Transcript</a><br />
          </div>
          <img src={wsu} alt="Not found" />
        </div>
        <div className="rowcontainer">
          <div>
            Relevant Courses: <br />
            &bull; Python / Java / C++ / C Programming <span style={{fontSize:'.8em'}}>(4 courses)</span><br/>
            &bull; Computer Science 1 & 2<br />
            &bull; Basic Engineering 1 & 3<br />
            &bull; Computer Architecture & Organization<br />
            &bull; Algorithm Design & Analysis<br />
            &bull; Fundamental Structures in CS<br />
            &bull; Software Engineering<br />
          </div>
          <div className="columncontainer" >
            <img src={C} alt="not found" />
            <img src={Java} alt="not found" />
            <img src={Python} alt="not found" />
          </div>
        </div>
      </div>
  );
}
function AchievementsEducation(){
  return(
    <div className={styles.inside}> 
        <div className={"rowcontainer"}>
          <div>
            &bull;Rosa Parks Scholarship<br/>
            <div>
              Awarded for showing academic excellence, leadership, and community involvement.<br/><br/>
            </div>
          </div>
          June 2022
          <img src={Rosa} alt="" />
        </div>
        <div className={"rowcontainer"}>
          <div>
            &bull;Yemeni American Association Scholarship<br/>
            <div>
              Awarded for showing academic excellence and being an active Yemeni American community member.<br/><br/>
            </div>
          </div>
          August 2022
          <img src={YAA} alt="" />
        </div>
    </div>
  );
}
function CarMaintenanceProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_car}> 
            <img src={car1} alt="" />
            <img src={car2} alt="" />
            <img src={car3} alt="" />
            <img src={car4} alt="" />

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              Get reminders to service your vehicle and keep track of what needs maintenance!
              <br/><br/>
              A full-stack car maintenance app with the following features:
              <ul>
                <li>Create Account / Log In</li>
                <li>Find Local Services</li>
                <li>Add / View Service History</li>
                <li>View Service Deadlines</li>
                <li>AI Customer Support</li>
                <li>View Browser Notifications</li>
              </ul>
               Integrates APIs for maps, images, geocoding, and AI.<br/><br />
              <a href="https://github.com/saleh-programs/Car_Maintenance_Site" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Database: SQLite</li>
                <li>Frontend: React</li>
                <li>Backend: NodeJS</li>
                <li>Hosting: Netlify (Frontend), Render (Backend)</li>
                <li>Password Hashing: Bcrypt</li>
                <li>Error Handling: Consistent try/catch error handling</li>
                <li>Documentation: All functions/actions commented </li>
                <li>External APIs:
                  <ul style={{fontSize:'.8em'}}> 
                  <li>Groq (for AI support)</li> 
                  <li>Web Push (for notifications)</li>
                  <li>Google Places (for business images)</li>
                  <li>Overpass (for finding nearby mechanics / geocoding)</li> 
                  </ul>
                </li>
                <li>Miscellaneous:
                  <ul style={{fontSize:'.8em'}}> 
                  <li>Input Validation</li> 
                  <li>Large Vehicle Database</li>
                  <li>Local Storage</li>
                  <li>Overpass (for finding nearby mechanics / geocoding)</li> 
                  </ul>
                </li>
              </ul>
              </div>
          </div>
      </div>
    );
}
function FileAdventurerProject(){
      return(
      <div className={styles.inside}> 
        <div className="columncontainer">
          <div className={styles.demo_imgs_platformer}>
            <img src={fileadv1} alt="" />
            <img src={fileadv2} alt="" />
            <img src={fileadv3} alt="" />
            <img src={fileadv4} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              "File Adventurer" is my take on a cleaner, more intuitive version of Windows' "File Explorer". I built it to reduce clutter and add features I felt were missing in the built in file system, based on my frequent use of it.
              <br/><br/>
              Designed a REST API (20+ endpoints) for file operations including optimized recursive search and a priority queue based "Recent Folders" feature. Tailored application to the user experience by implementing expected behaviors such as allowing navigation while dragging and using lazy loading to show more entries as the user scrolls. Created custom assets and animations to add a unique personality. <br/><br />
              Features include:<br />
              <ul>
                <li>Folder Navigation / Open Files</li>
                <li>Create, Delete, drag & drop </li>
                <li>Pin, Hide, or Rename Entries</li>
                <li>Sort by Name, Creation Date, or Modified Date</li>
                <li>Track Recent Folders</li>
                <li>Search Entries</li>
                <li>Tree Mode: View all entries in a traditional nested environment</li>
                <li>Stack Mode: View the hierarchical structure of a specific path</li>
              </ul>
              <a href="https://github.com/saleh-programs/FileAdventurer.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Database: SQLite</li>
                <li>Frontend: React</li>
                <li>Backend: FastAPI</li>
                <li>Deployment: Tauri (to package as desktop app)</li>
                <li>Error Handling: Consistent internal debugging logs + fallback mechanisms across all requests and responses</li>
                <li>Documentation: Provided consistent, dev-friendly descriptions of all functions and complex behaviors</li>
                <li>Infinite scroll: implemented with lazy loading for performance</li>
                <li>Recent Folders: Quick Access implemented with priority queue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
function PhysicsToolProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_physics}> 
            <img src={physics1} alt="" />
            <img src={physics2} alt="" />
            <img src={physics3} alt="" />
            <img src={physics4} alt="" />

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              A game designed to help physics students improve at solving kinematics based physics problems! Join Willow on a journey gliding through the air and sprinting on foot, all while solving word problems related to his situation. Maybe you'll even get to chat with him if you do well enough!
              <br/><br/>
              The game contains 10 levels of progressing difficulty and 3 questions each. Level 10 connects to the OpenAI API to allow you to chat with Willow.<br/><br />
              <a href="https://github.com/saleh-programs/Physics_Practice_Tool" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Built in Python with Pygame Library</li>
                <li>OpenAI API</li>
                <li>Motion Physics</li>
                <li>State Management</li>
                <li>Collision Logic</li>
                <li>Camera System</li>
                <li>Performance Optimizations</li>
                <li>Vital Classes: 
                  <ul style={{fontSize:'.8em'}}>
                    <li>ProblemSolver Class: <br />Accepts any combination of randomized inputs to solve problems</li>
                    <li>StoryManager Class: <br />Allows for the easy creation of levels with timing events</li>
                    <li>Trails, Balloons, Textboxes, & more</li>
                  </ul> 
                </li>
              </ul>
              </div>
          </div>
        </div>
    );
}
function PlatformerProject(){
    return(
      <div className={styles.inside}> 
        <div className="columncontainer">
          <div className={styles.demo_imgs_platformer}>
            <img src={pygame1} alt="" />
            <img src={pygame2} alt="" />
            <img src={pygame3} alt="" />
            <img src={pygame4} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              A Hollow Knight inspired game made in Pygame with custom animations! The player can slash, shoot, and swing faced against enemies with unique logic!
              <br/><br/>
              Gained skills navigating a large project and working with more complex solutions.<br/><br />
              <a href="https://github.com/saleh-programs/Platformer_Game.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Built in Python with Pygame Library</li>
                <li>Motion Physics</li>
                <li>State Management</li>
                <li>Health/Damage System</li>
                <li>Camera System</li>
                <li>Melee, Shooting, and Grappling Hook Mechanics</li>
                <li>Enemy Behavior Logic</li> 
                <li>Performance Optimizations</li>
                <li>Tiled (for map editing)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
function StockMarketProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_models}>
            <img src={decisionTree} alt="" />
            <img src={ANN} alt="" />
            <img src={TreeAndANN} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              Used 2 machine learning models (ANN and Decision Tree) to analyze trends in individual CPI sectors (gasoline, food, energy, etc.) and predict if overall inflation will rise. The F1 scores (performance scores) for both models are provided.<br/><br/>
              ANN model: 92% <br/>
              Decision Tree Model: 80%<br/><br />
              <a href="https://github.com/saleh-programs/Inflation_Predictor.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <li>Artificial Neural Networks</li>
                <li>Decision Trees</li>
                <li>Data preprocessing</li>
                <li>Data visualization</li>
                <li>Libraries: Keras / TensorFlow / SKlearn/Pandas / Matplotlib</li>
                <li>Created in Python</li>
              </ul>
            </div>
          </div>
      </div>
    );
}
function LaGelatiExperience(){
      return(
        <div className={styles.inside}>
          <div className={"rowcontainer"}>
            <div>
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
            <div className={styles.lagelati_img}>
              <img src={lagelati} alt="" />
            </div>
          </div>
        </div>
      );
}
const contentDict = {
  "fordson": <FordsonEducation/>,
  "wayne": <WayneEducation/>,
  "achievements": <AchievementsEducation/>,
  "carMaintenance": <CarMaintenanceProject/>,
  "fileAdventure": <FileAdventurerProject/>,
  "physicsTool": <PhysicsToolProject/>,
  "platformer": <PlatformerProject/>,
  "stockMarket": <StockMarketProject/>,
  "laGelati": <LaGelatiExperience/>
}
export default contentDict;