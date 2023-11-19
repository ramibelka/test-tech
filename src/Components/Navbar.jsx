import { FaHome, FaUsers, FaPuzzlePiece } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { BiSolidFactory } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0">
      <nav className="m-0 flex h-screen w-20 flex-col items-center gap-6 border bg-gray-100 pt-5 text-5xl shadow-md shadow-black">
        <FaHome />
        <BiSolidFactory />
        <RiRobot2Fill />
        <FaPuzzlePiece />
        <FaUsers />
        <IoMdSettings className="mb-2 mt-auto" />
      </nav>
    </div>
  );
};

export default Navbar;
