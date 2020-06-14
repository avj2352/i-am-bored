import React, {FunctionComponent, useState, useEffect, useRef} from 'react';
import logo from "../../assets/img/logo.png";
import {Link} from "react-router-dom";
import RecipeCard from "../../components/cards/recipe-card/RecipeCard";
import BorderCard from "../../components/cards/border-card/BorderCard";

const HomeView: FunctionComponent = (props): JSX.Element => {
    // states
    const [ signInContent, setSignInContent] = useState<JSX.Element>(<React.Fragment/>);
    const [imageLoaded, setImageLoaded] = useState(false);
    // ref
    const bannerDom = useRef<HTMLDivElement>(document.createElement('div'));
    // event handlers
    const handleLogoLoad = () => {
        setImageLoaded(true);
    };

    useEffect(()=>{
        if (imageLoaded) {
            bannerDom.current.style.opacity = '1';
        } else {
            bannerDom.current.style.opacity = `0`;
        }
        setSignInContent (
            <React.Fragment>
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4">
                    <img
                        src={logo}
                        onLoad={handleLogoLoad}
                        alt={`logo`}
                        className="w-1/2 md:w-1/4 h-auto rounded-lg shadow"/>
                    <div className="flex flex-col mx-6 justify-start">
                            <p className="text-center md:text-left md:text-lg my-4">
                                Welcome to <strong>Book.Of.Recipes.Easily.Done</strong><br/>
                            </p>
                            <p className="text-left text-sm md:text-lg mb-4">
                                A Progressive Web Application which comes handy for any
                                one who likes to cook and store their own recipes. <br/>
                                It requires no-installation, you can use it completely for free
                                so please share this app!
                            </p>
                            <Link className="hover:underline text-sm text-orange-200 text-left md:text-lg mb-4" to={'/login'}> Sign In / Sign up to create your own Recipes !!</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    },[imageLoaded]);

    return (
        <div ref={bannerDom} className="opacity-0 transition-opacity
                        duration-1000 ease-in-out flex flex-col justify-start w-full mb-16">
            {signInContent}
            <BorderCard title={`Recent Entered Recipes`}>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </BorderCard>
            <BorderCard title={`Dashboard`} borderBottom={true}>
                <RecipeCard/>
            </BorderCard>
        </div>
    );
};

export default HomeView;