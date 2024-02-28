import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Exprince.jsx/Exprince";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Home></Home>
      </div>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>

      <SocialLinks></SocialLinks>
    </div>
  );
};

export default App;
