import Navigation from "./Navigation/Navigation";
import SideBar from "./SideBar/SideBar";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";

const App = () => {
  return (
    <div>
      <SideBar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
};

export default App;
