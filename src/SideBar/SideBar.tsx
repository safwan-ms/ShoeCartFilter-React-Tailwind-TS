import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { LiaOpencart } from "react-icons/lia";

const SideBar = () => {
  return (
    <section className="sidebar-body pt-2 h-full z-10 border-r fixed ">
      <div>
        <div className="flex justify-center items-center py-1">
          <LiaOpencart className="text-5xl" />
        </div>

        <div className="px-4 ">
          <Category />
          <Price />
          <Colors />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
