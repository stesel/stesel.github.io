import { IconType } from "../consts/IconType";

export interface IconProps {
    svgClassName: string;
    pathClassName: string;
}

export interface SocialIconProps {
    type: IconType;
    url: string;
}

export interface SocialIconsProps {
    icons: SocialIconProps[];
}

export interface HomeData {
    intro: string;
    tagLine: string;
    socialIcons: Array<{
        type: IconType;
        url: string;
    }>;
}
