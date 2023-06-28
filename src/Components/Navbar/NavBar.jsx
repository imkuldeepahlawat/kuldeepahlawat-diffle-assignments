import cart from "../../assets/navIcon/cart.png";
import favorite from "../../assets/navIcon/favorite.png";
import logo from "../../assets/navIcon/logo.png";
import region from "../../assets/navIcon/region.png";
import userlogo from "../../assets/navIcon/userlogo.png";

const NavBar = () => {
  return (
    <div className="h-[73px] flex justify-between p-3">
    {/* left */}
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      {/* right */}
      <div className="flex gap-4 ">
        <div className="lg:flex gap-3 hidden md:block" >
          <img className="w-[24px] h-[24px]" src={region} alt="region" />
          <p className="font-medium">
            India (English) <span>{" "}•{" "}</span>
            <span className="uppercase">inr</span>{" "}
          </p>
        </div>
        <div className="flex gap-2">
          <img className="w-[30px] h-[30px]" src={favorite} alt="heart" />
          <img className="w-[30px] h-[30px]" src={cart} alt="carticon" />
          <img className="w-[24px] h-[24px]" src={userlogo} alt="usericon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
