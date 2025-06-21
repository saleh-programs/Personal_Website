import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/components/Bar.module.css'

import contentDict from './InnerContent';

function Bar({name, contentID, date, link}){
  const [status,setStatus] = useState(false);
  const [size,setSize] = useState({width: window.innerWidth,height: window.innerHeight})
  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const elem = useRef(null);

  return(
      <div className={styles['dropdown-ref']}>
        <div className={`${styles.dropdown} ${status ? styles.rotateDropdown:""}`} onClick={()=>{setStatus(!status);}}>
          &gt;
        </div>
        <div className={styles.bar} style={{height: status ? (120 + elem.current.scrollHeight)+"px" : "60px"}} onClick={()=>{setStatus(!status);}}>
          <div className={"rowcontainer"} style={{marginBottom:"20px"}}>
            <div className={styles.left}>
              {name}
            </div>
            {link 
            ? 
              <div>
                <a href={link[1]} target='_blank_'>{link[0]}</a>
              </div>
            :
              <div>
                  {date}
              </div> 
            }
          </div>
          <div ref={elem}>
            {contentDict[contentID]}
          </div>
        </div>
      </div>
  );
}

 
export default Bar;