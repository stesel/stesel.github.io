import * as React from "react";
import "./Home.css";
import { DataUrl } from "../../consts/dataUrl";
import { HomeData } from "../../types";
import { SocialIcons } from "../icons/SocialIcons";
import { withLoader } from "../loader/Loader";

export interface HomeProps extends HomeData {}

const Component: React.FunctionComponent<HomeProps> = props => {
    const {
        intro,
        tagLine,
        socialIcons,
    } = props;

    return (
        <div className="home appearing">
            <div className="homeIntro">{intro}</div>
            <div className="homeTagLine">{tagLine}</div>
            <SocialIcons icons={socialIcons} />
        </div>
    );
};

export const Home: React.FunctionComponent = withLoader<HomeProps>(DataUrl.Home)(Component);
