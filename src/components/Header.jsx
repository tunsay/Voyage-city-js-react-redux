import { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import Modal from "./Modal";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className=" w-full p-4 bg-slate-50 ">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="text-lg font-bold flex items-center">
          <MdFlightTakeoff className="text-2xl  mr-1 text-red-600" /> Voyage City
        </a>
        {toggle ?
          <div className="fixed inset-0 flex items-center justify-center">
            <Modal onClose={() => setToggle(false)} />
          </div>
          :
          <button onClick={() => setToggle(true)} className="bg-red-600 text-white px-6 py-1 rounded font-medium">
            Se connecter
          </button>
        }

      </nav>
    </header>
  );
};

export default Header;
