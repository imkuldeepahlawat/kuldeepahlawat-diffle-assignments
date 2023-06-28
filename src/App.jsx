import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Iconspin from "./Components/IconSpin/Iconspin";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-scroll ">
      <NavBar />
      <HeroSection/>
      
    </div>
  );
}

export default App;
