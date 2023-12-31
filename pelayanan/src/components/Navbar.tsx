import Logo from "../assets/uranus.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <Link to={"/"} className="flex flex-grow items-center gap-4 py-2 px-4 shadow-2 md:px-6 2xl:px-11" >
        <div className="h-[50px] w-[50px]">
          <img
            src={Logo}
            className="w-full h-full object-contain object-center"
            alt="Logo"
          />
        </div>
        <h2 className="lg:text-xl text-sm text-black">Survey Pelayanan</h2>
      </Link>
    </header>
  );
};

export default Navbar;
