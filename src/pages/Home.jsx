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
            <li>GitHub | LinkedIn | Handshake</li>
          </ul>
        </div>
      </div>
      <div className="separator">

      </div>
      <div className="page-right">
        <div className="content">
          Hello! My name is Murad Saleh. This is a site I built to show my projects, experience, education, and a few other things that employers may be looking for.
          <br/><br/>
          I'm looking for opportunities to grow my skills in the software industry while still exploring which areas fit me best. I'm eager for a chance to get started!
        </div>
        <div className="aboutme">
          About Me
        </div>
      </div>
    </div>
  );
}

export default Home;