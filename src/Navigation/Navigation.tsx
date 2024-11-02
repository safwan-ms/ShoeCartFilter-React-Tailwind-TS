import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="nav-body py-4 border-b-2 flex justify-between">
      <div>
        <input
          type="text"
          placeholder="Enter Your Search..."
          className="bg-gray-100 p-2 pr-5 focus:outline-none w-full max-w-xs md:max-w-sm"
        />
      </div>
      <div className="flex pt-3 space-x-4">
        <FaRegHeart className="text-white" />
        <TiShoppingCart className="text-white" />
        <FaUserPlus className="text-white" />
      </div>
    </div>
  );
};

export default Navigation;
