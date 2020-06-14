import React, {FunctionComponent, useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
// custom
import logo from './../../assets/img/logo.png';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const AboutView: FunctionComponent = (props): JSX.Element => {
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
                <Header isDashboard={false}/>
                <div ref={bannerDom}
                     className="opacity-0 transition-opacity
                        duration-1000 ease-in-out container-inner mx-auto pb-8 text-center text-xl">
                    <div className="flex flex-col justify-start items-center w-full mx-auto mb-8">
                        <img
                            src={logo}
                            onLoad={handleLogoLoad}
                            alt={`logo`}
                            className="w-1/3 h-auto rounded-lg shadow mb-4"/>
                        <p className="uppercase font-bold text-lg">About B.O.R.E.D</p>
                        <div className="flex flex-col justify-start mb-4">
                            <span className="text-left text-sm md:text-lg">
                                A Progressive Web Application <strong>(PWA)</strong> which comes handy for any
                                one who would like to -
                                <ul className="pl-4 list-decimal">
                                    <li>Create and Store their own recipe in their required format,</li>
                                    <li>Share their created recipe with friends,</li>
                                    <li>Maintain their shopping list of groceries...and more</li>
                                </ul> <br/>
                                It requires no-installation, you can use it completely for free
                                so please share this app!
                            </span>
                            <Link to={`/login`}
                                className="mt-8 text-sm no-underline
                                font-normal hover:text-orange-300 focus:text-orange-300">
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    );
};

export default AboutView;