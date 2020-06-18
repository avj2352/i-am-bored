import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from 'clsx';
import {
    addLocalStorageJSON,
    getLocalStorageJSON
} from "../../../common/util/LocalStorageHelper";
import { FaCookie } from "react-icons/fa";

const BannerCard: FunctionComponent = (props): JSX.Element => {
    const [isDisplay, toggleDisplay] = useState(true);
    // event handlers
    const hideDisplay = () => {
        toggleDisplay(false);
        addLocalStorageJSON('cookie', true);
    };

    const baseClass = clsx({
        "transition-opacity duration-1000 z-20 fixed bottom-0 w-full bg-orange-400 text-white": true,
        "opacity-1": isDisplay,
        "opacity-0": !isDisplay
    });

    useEffect(() => {
        const cookieDisplay = getLocalStorageJSON('cookie');
        if (cookieDisplay) toggleDisplay(false);
        else toggleDisplay(true);
    },[]);
    return (
        <div className={baseClass}>
            {isDisplay && <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4">
                <div className="flex flex-col md:flex-row justify-between w-full mb-4 lg:mb-0">
                    <section className="flex flex-col m-2">
                        <div
                            className="flex flex-row
                                        justify-start items-center font-bold">
                            <FaCookie className="mr-4"/> Cookie Consent.</div>
                        <p>This site uses cookies to provide social media features &amp; to analyse traffic
                            in order to offer you a better browsing experience. <br/>
                            By clicking "I agree" you are agreeing to the use of cookies by I.AM.BORED application
                        </p>
                    </section>
                    <ul className="flex justify-center items-center mt-2 space-x-8">
                        <li>
                            <button
                                onClick={hideDisplay}
                                className="text-white rounded outline-none
                                            focus:outline-none bg-orange-500
                                            p-2 px-4 hover:bg-orange-600">
                                I Agree
                            </button>
                        </li>
                        <li>
                            <a
                                href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
                                className="text-white rounded outline-none
                                            focus:outline-none bg-orange-500
                                            p-2 px-4 hover:bg-orange-600">
                                Learn more...
                            </a>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>
    );
};

export default BannerCard;