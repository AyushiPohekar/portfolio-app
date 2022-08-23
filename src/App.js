
import './App.css';
import Header from './components/header/header';
import About from './components/bodycomponents/About';
import Skills from './components/bodycomponents/skills';
import Project from './components/bodycomponents/Project';
import Contact from './components/bodycomponents/Contact';
import Footer from './components/bodycomponents/Footer';
function App() {
  return (
    <div className="App">
   
      <Header/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
