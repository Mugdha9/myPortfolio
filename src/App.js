import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Socials from './components/Socials.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="bg-bgColor">
      <Navbar/>
      <Home/>
      <Socials/>
      <WorkExperience/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
