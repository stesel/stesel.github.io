import * as React from "react";
import "./Home.css";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import {MediumIcon} from "../icons/MediumIcon";
import { CodesandboxIcon } from "../icons/CodesandboxIcon";

export const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="intro">Hello, I'm Leonid!</div>
            <div className="tagline">CODING | MUSIC | GAMING</div>
            <div className="icons">
                <a target="_blank" href="https://github.com/stesel"><GitHubIcon svgClassName="icon" pathClassName="path" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/leonid-trofymchuk-2a976460"><LinkedinIcon  svgClassName="icon" pathClassName="path" /></a>
                <a target="_blank" href="https://twitter.com/Stesel23"><TwitterIcon svgClassName="icon" pathClassName="path" /></a>
                <a target="_blank" href="https://medium.com/@stesel23"><MediumIcon svgClassName="icon" pathClassName="path" /></a>
                <a target="_blank" href="https://codesandbox.io/u/stesel"><CodesandboxIcon svgClassName="icon" pathClassName="path" /></a>
            </div>
        </div>
    );
};
