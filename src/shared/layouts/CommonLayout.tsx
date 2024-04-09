import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
export default function  CommonLayout() {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  return (
    <>
      <Header />
      
      <section className="relative mx-auto overflow-hidden container-fluid">
        <Outlet />

        {currentPath !== "/contact" && (
          <section className="py-20 bg-black">
            <div className="container mx-auto">
              <Collaboration />
            </div>
          </section>
        )}

        <CustomFooter />
      </section>
    </>
  );
}
