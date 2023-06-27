
import batmanIcon from "../../assets/logo/batmanIcon.svg";
import batmanIconBack from "../../assets/logo/batmanIconBackGround.svg";
import boyIcon from "../../assets/logo/boyIcon.png";
import greenMonster from "../../assets/logo/greenMonster.png";
import gtaIcon from "../../assets/logo/gtaIcon.png";
import seaHorseIcon from "../../assets/logo/seaHorseIcon.png";
import xboxIcon from "../../assets/logo/xboxIcon.png";
import "./Iconspin.css"; // Import the CSS file for additional styling

const Iconspin = () => {
  return (
    <div className="relative flex justify-center items-center w-[944px] h-[944px] ml-auto mr-auto iconSpin">
      {/* batman icon top border*/}
      <div className="absolute">
        <div className="relative  icon-circle border h-[686px] w-[686px]   rounded-full">
          <div className="absolute top-[400px]">
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
        <div className="realtive icon-circle  h-[686px] w-[686px]  rounded-full">
          <img className="icon-image absolute bottom-[250px]  -right-9" src={xboxIcon} alt="xbox-icon" />
        </div>
      </div>
        {/* green monster bottom left border*/}
      <div className="absolute">
        <div className="relative icon-circle border h-[944px] w-[944px]  rounded-full">
          <img
            className="icon-image absolute -bottom-9 left-[400px]"
            src={greenMonster}
            alt="green-monster-icon"
          />
        </div>
      </div>
        {/* gta icon top border*/}
      <div className="absolute">
        <div className="relative icon-circle border h-[464px] w-[464px]  rounded-full">
          <img className="icon-image absolute -bottom-7 left-[270px]" src={gtaIcon} alt="boy-icon" />
        </div>
      </div>
        {/* boyIcon right*/}
      <div className="absolute">
        <div className="relative icon-circle  h-[944px] w-[944px]  rounded-full">
          <img className="icon-image absolute right-[400px]" src={boyIcon} alt="boy-icon" />
        </div>
      </div>
        {/* seahorseIcon bottom*/}
      <div className="absolute">
        <div className="relative icon-circle   h-[944px] w-[944px]  rounded-full">
          <img
            className="icon-image absolute top-[120px] left-[150px]   "
            src={seaHorseIcon}
            alt="sea-horse-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Iconspin;
