import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import GoToTop from './Components/GoToTop/GoToTop';
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='Home'><Home /></section>
      <section id='About'><About /></section>
      <section id='Skills'><Skills /></section>
      <section id='Project'><Project /></section>
      <section id='Contact'><Contact /></section>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
