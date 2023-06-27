import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Iconspin from "./Components/IconSpin/Iconspin";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="w-full h-[100%] overflow-hidden">
      <NavBar />
      <HeroSection/>
      
    </div>
  );
}

export default App;
