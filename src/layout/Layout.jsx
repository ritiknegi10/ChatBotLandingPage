import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-100 d-flex overflow-hidden">
      {/* <Sidebar /> */}
      <main className="flex-grow-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
