import logo from "./logo.svg";
import "./App.css";
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <HeroSection></HeroSection>
      <Features></Features>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}

export default App;
