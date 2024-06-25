import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
import SocialMediaTag from "../components/SocialMediaTag";
import PageScroll from "../components/PageScroll";
import Lottie from 'react-lottie';
import * as animationData from '../../shared/lottie-icons/triangle.json'
// import * as animationData from '../../shared/lottie-icons/lined-triangle.json'


export default function  CommonLayout() {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <Header />




 
  <div className="absolute w-40 h-40 rotate-45 xl:-top-96 xl:-right-64 lg:-top-96 lg:w-1/3 lg:h-1/6 lg:-right-64">
      <Lottie options={defaultOptions} style={{ width: '100%', height: '100%' }} 
              
             />
             </div>
      <PageScroll />
      <section className="relative mx-auto overflow-hidden container-fluid">
        <Outlet />

        {currentPath !== "/contact" && (
          <section className="py-12 bg-black md:py-20">
            <div className="px-4 mx-auto md:container md:px-0">
              <Collaboration />
            </div>
          </section>
        )}
 <SocialMediaTag/>
        <CustomFooter />
      </section>
    </>
  );
}
