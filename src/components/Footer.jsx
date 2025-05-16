import styles from '../../styles/components/Footer.module.css'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

function Footer(){
  const textBox = useRef();
  const [feedback,setFeedback] = useState("");
  const [affirmation,setAffirmation] = useState("");
  emailjs.init("wMRYWbZdlNS_ZzOd5");

  function updateFeedback(event){
    setFeedback(event.target.value);
  }
  function handleClick(){
    //Send Mail
    textBox.current.value = "";
    emailjs.send("service_n8zj5zl","template_21vlj4o",{message: feedback}).then(alert("email sent!"));
    setAffirmation("Message Sent, Thank You!");
    setTimeout(()=>{
      setAffirmation("")
    },5000)
  } 
  return(
    <div className={styles.footer}>
        <div className={styles.footerinfo}>
          Thank you for visiting my site! Would you mind leaving some anonymous feedback? What did you like or dislike? This will be sent to my personal email (salehm0529@gmail.com) which I check regularly. I would really appreciate it!
        </div>
        <textarea className={styles.feedback} ref={textBox} placeholder='Enter Feedback'  rows="6" cols="50" wrap="soft" onChange={updateFeedback}></textarea>
        <button className={styles.submitfeedback} onClick={handleClick}>Send Feedback</button>
        <div className={styles.message}>
          {affirmation}
        </div>
    </div>
  )
}

export default Footer; 