import Iconspin from "../IconSpin/Iconspin";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="relative h-[100%]">
      <div className=" -z-5">
        <Iconspin />
      </div>
      <div className="hero-shadow blur-3xl rounded-full -z-6"></div>
      <div className="absolute  top-[25%] left-[25%] text-center flex flex-col gap-5">
        <h1 className="w-[815px] text-[60px] font-extrabold">
          Driffle is a <span className="text-[#5DF5B5]">one-stop shop</span> for
          all your gaming needs.
        </h1>
        <p className="w-[815px]">
          Not only do we sell games, but also offer gift cards, DLC's, and more.
          Driffle is a marketplace, so you can find a wide variety of items from
          different sellers in one place. We are committed to the future of
          gaming and strive to make our platform safe, affordable, and
          sustainable for all users. Whether you're looking for the latest
          releases or hard-to-find classics, you're sure to find what you're
          looking for on Driffle.
        </p>
        <button className="rounded-full border p-3 w-52 bg-slate-800 ml-auto mr-auto">
          Visit our store
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
