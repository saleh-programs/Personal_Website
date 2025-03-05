import '../../styles/pages/Home.css'
function Home(){
  return(
    <div className="page">
      <div className="website-title">
        Welcome, I'm Murad Saleh!
      </div>
      <div className="page-left">
        <div className="img">
        </div>
        <div className="img-info">
          <ul>
            Computer Science student at Wayne State University<br/><br/>
            <li></li>
            <li>Age: 20 </li>
            <li>Email:  hl4178@wayne.edu</li>
            <li><a href="https://github.com/saleh-programs" target='_blank'>Github</a> | <a href="https://www.linkedin.com/in/murad-saleh-674722254/" target='_blank'>LinkedIn</a> | <a href="https://app.joinhandshake.com/profiles/7a79aj" target='_blank'>Handshake</a></li>
          </ul>
        </div>
      </div>
      <div className="separator">

      </div>
      <div className="page-right">
        Hello! My name is Murad Saleh. This is a site I built to show my projects, experience, education, and a few other things that employers may be looking for.
        <br/><br/>
        I'm looking for opportunities to grow my skills in the software industry while still exploring which areas fit me best. I'm eager for a chance to get started!
        <div className="aboutme">
          About Me
        </div>
      </div>
    </div>
  );
}
 
export default Home;