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
    <div className="App ">
      <div className="block lg:hidden">
        <div className="bg-gray-400">
          <Nav></Nav>
          <HeroSection></HeroSection>
          <Features></Features>
          <Testimonials></Testimonials>
          <CallToAction></CallToAction>
          <Footer></Footer>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="bg-hero-pattern bg-fixed bg-no-repeat bg-cover ">
          <Nav></Nav>
          <HeroSection></HeroSection>
          <Features></Features>
          <Testimonials></Testimonials>
          <CallToAction></CallToAction>
          <Footer></Footer>
        </div>
      </div>
    </div >
  );
}

export default App;
