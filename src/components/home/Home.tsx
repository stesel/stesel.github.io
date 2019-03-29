import * as React from "react";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="intro">Hello, I'm Leonid!</div>
            <div className="tagline">CODING | MUSIC | GAMING</div>
            <div className="icons">
                <a target="_blank" href="https://github.com/stesel"><i className="fab fa-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/leonid-trofymchuk-2a976460"><i className="fab fa-linkedin"></i></a>
                <a target="_blank" href="https://twitter.com/Stesel23"><i className="fab fa-twitter"></i></a>
                <a target="_blank" href="https://medium.com/@stesel23"><i className="fab fa-medium"></i></a>
                <a target="_blank" href="https://codesandbox.io/u/stesel"><i className="fab fa-codepen"></i></a>
            </div>
        </div>
    );
};
