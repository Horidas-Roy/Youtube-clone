import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../shared/Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";



const MainLayOut = () => {
   
  return (
    <div>
      <Header/>
      <div className="flex">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayOut;
