import React, {FunctionComponent, useState, useRef, useEffect} from 'react';
// custom
import logo from './../../assets/img/logo.png';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const LoginView: FunctionComponent = (props): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const bannerDom = useRef<HTMLDivElement>(document.createElement('div'));
    // event handlers
    const handleLogoLoad = () => {
        setImageLoaded(true);
    };
    // side-effects
    useEffect(()=>{
        if (imageLoaded) {
            bannerDom.current.style.opacity = '1';
        } else {
            bannerDom.current.style.opacity = `0`;
        }
    },[imageLoaded]);
    return (
      <React.Fragment>
          <div className="newsletter bg-background-tertiary h-screen">
              <Header/>
              <div ref={bannerDom} className="opacity-0 transition-opacity duration-1000 ease-in-out container-inner mx-auto py-16 pb-8 text-center text-xl">
                  <div className="flex flex-col justify-center items-center w-4/5 mx-auto mb-8">
                      <img src={logo} onLoad={handleLogoLoad} alt={`logo`} className="w-2/3 md:w-1/2 h-auto rounded-lg shadow mb-4"/>
                      <p className="mb-2 text-lg">Online PWA based Recipe Application</p>
                      <p className="uppercase font-bold text-lg">Login to your Account</p>
                          <div className="w-full md:w-1/2 flex flex-col justify-center">
                              <button
                                  className="w-full rounded
                                    shadow uppercase bg-green-700
                                    text-white
                                    text-lg py-3 px-4 tracking-wide shadow
                                    focus:outline-none hover:bg-green-800 focus:bg-green-900 z-10 mt-4">
                                        <span>Login</span>
                              </button>
                          </div>
                  </div>
              </div>
              <Footer/>
          </div>
      </React.Fragment>
    );
};

export default LoginView;