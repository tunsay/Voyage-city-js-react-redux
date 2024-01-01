import { MdFlightTakeoff } from "react-icons/md";

const Header = () => {
  return (
    <header className=" w-full p-4 bg-slate-50 ">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="text-lg font-bold flex items-center">
        <MdFlightTakeoff className="text-2xl  mr-1 text-red-600"/> Voyage City
        </a>
        <button className="bg-red-600 text-white px-6 py-1 rounded font-medium">
          Se connecter
        </button>
      </nav>
    </header>
  );
};

export default Header;
