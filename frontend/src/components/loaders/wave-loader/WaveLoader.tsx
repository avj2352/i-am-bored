import React, {FunctionComponent} from "react";

// material
interface WaveSVGProps {
    color: string;
}

const WaveSVG: FunctionComponent<WaveSVGProps> = (props): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="-10"
            width="60"
            version="1.1"
            viewBox="0 0 100 100"
            xmlSpace="preserve">
            <circle cx="6" cy="50" r="6" fill={props.color}>
                <animateTransform
                    attributeName="transform"
                    begin="0.1"
                    dur="1s"
                    repeatCount="indefinite"
                    type="translate"
                    values="0 15 ; 0 -15; 0 15"/>
            </circle>
            <circle cx="30" cy="50" r="6" fill={props.color}>
                <animateTransform
                    attributeName="transform"
                    begin="0.2"
                    dur="1s"
                    repeatCount="indefinite"
                    type="translate"
                    values="0 10 ; 0 -10; 0 10"
                />
            </circle>
            <circle cx="54" cy="50" r="6" fill={props.color}>
                <animateTransform
                    attributeName="transform"
                    begin="0.3"
                    dur="1s"
                    repeatCount="indefinite"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                />
            </circle>
        </svg>
    );
};

interface WaveLoaderProps {
    title?: string;
    display: boolean;
    color?: string;
}

const WaveLoader: FunctionComponent<WaveLoaderProps> = (props): JSX.Element => {
    const { title, display, color } = props;

    const getLoaderContent = (state: boolean): JSX.Element => {
        if (state) {
            return <div className="flex flex-row">
                {!!title && <p className="mt-4 mr-2">{title}</p>}
                <WaveSVG color={color ? color : `white`}/>
            </div>;
        } else {
            return <React.Fragment/>;
        }
    };

    return (
        <React.Fragment>
            {getLoaderContent(display)}
        </React.Fragment>
    );
};

export default WaveLoader;