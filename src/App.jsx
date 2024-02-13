import Hero from "./components/Hero";
import Departe from "./components/Departe";
import OurMessage from "./components/OurMessage";
import OurTarget from "./components/OurTarget";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMessage />
      <OurTarget />
      <Departe />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
