import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';

function App() {

  return (
    <>
      <div className='page-container'>
        <Navbar/>
        <div className='routes'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes> 
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default App
