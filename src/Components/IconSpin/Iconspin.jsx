
import batmanIcon from "../../assets/logo/batmanIcon.svg";
import batmanIconBack from "../../assets/logo/batmanIconBackGround.svg";
import boyIcon from "../../assets/logo/boyIcon.png";
import greenMonster from "../../assets/logo/greenMonster.png";
import gtaIcon from "../../assets/logo/gtaIcon.png";
import seaHorseIcon from "../../assets/logo/seaHorseIcon.png";
import xboxIcon from "../../assets/logo/xboxIcon.png";
import "./IconSpin.css"; // Import the CSS file for additional styling

const Iconspin = () => {
  return (
    <div className="relative flex justify-center items-center w-[750px] h-[750px]   lg:w-[944px] lg:h-[944px] ml-auto mr-auto iconSpin">
      {/* batman icon top border*/}
      <div className="absolute">
        <div className="relative  icon-circle border h-[450px] w-[450px]  lg:h-[686px] lg:w-[686px]   rounded-full">
          <div className="absolute top-[200px]  lg:top-[400px]">
            <div className="relative icon-image w-[40px] h-[40px]">
              <img
                className="absolute z-10"
                src={batmanIcon}
                alt="batman-icon"
              />
              <img
                className="absolute"
                src={batmanIconBack}
                alt="batman icon background"
              />
            </div>
          </div>
        </div>
      </div>
      {/* xbox Icon */}
      <div className="absolute">
        <div className="relative  icon-circle  h-[450px] w-[450px]  lg:h-[686px] lg:w-[686px]   rounded-full">
          <img className="icon-image absolute bottom-[55px]  right-0 lg:bottom-[250px]  lg:-right-9" src={xboxIcon} alt="xbox-icon" />
        </div>
      </div>
        {/* green monster bottom left border*/}
      <div className="absolute">
        <div className="relative icon-circle border w-[750px] h-[750px]  lg:h-[944px] lg:w-[944px]  rounded-full">
          <img
            className="icon-image absolute bottom-96  lg:-bottom-9 lg:left-[400px]"
            src={greenMonster}
            alt="green-monster-icon"
          />
        </div>
      </div>
        {/* gta icon top border*/}
      <div className="absolute">
        <div className="relative icon-circle border h-[264px] w-[264px]  lg:h-[464px] lg:w-[464px]   rounded-full">
          <img className="icon-image absolute bottom-[0px] left-[50px] lg:-bottom-7 lg:left-[270px]" src={gtaIcon} alt="boy-icon" />
        </div>
      </div>
        {/* boyIcon right*/}
      <div className="absolute">
        <div className="relative icon-circle w-[750px] h-[750px]  lg:h-[944px] lg:w-[944px]  rounded-full">
          <img className="icon-image absolute right-[280px]  lg:right-[400px]" src={boyIcon} alt="boy-icon" />
        </div>
      </div>
        {/* seahorseIcon bottom*/}
      <div className="absolute">
        <div className="relative icon-circle w-[750px] h-[750px]  lg:h-[944px] lg:w-[944px]  rounded-full">
          <img
            className="icon-image absolute top-[700px] left-[200px]  lg:top-[120px] lg:left-[150px]   "
            src={seaHorseIcon}
            alt="sea-horse-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Iconspin;
