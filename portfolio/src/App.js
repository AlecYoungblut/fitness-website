import "./App.css";
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <div className="block lg:hidden">
        <div className="bg-gray-200">
          <Nav></Nav>
          <HeroSection></HeroSection>
          <div id="ServicesSm"></div>
          <Features></Features>
          <div id="AboutUsSm"></div>
          <AboutUs></AboutUs>
          <div id="TestimonialsSm"></div>
          <Testimonials></Testimonials>
          <div id="ContactSm"></div>
          <CallToAction></CallToAction>
          <Footer></Footer>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="bg-hero-pattern bg-fixed bg-no-repeat bg-cover ">
        <Nav></Nav>
          <HeroSection></HeroSection>
          <div id="ServicesLg"></div>
          <Features></Features>
          <div id="AboutUsLg"></div>
          <AboutUs></AboutUs>
          <div id="TestimonialsLg"></div>
          <Testimonials></Testimonials>
          <div id="ContactLg"></div>
          <CallToAction></CallToAction>
          <Footer></Footer>
        </div>
      </div>
    </div >
  );
}

export default App;
