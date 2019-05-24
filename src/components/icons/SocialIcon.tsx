import * as React from "react";
import { IconType } from "../../consts/IconType";
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { TwitterIcon } from "./TwitterIcon";
import { MediumIcon } from "./MediumIcon";
import { CodesandboxIcon } from "./CodesandboxIcon";
import { TooltipProps, withTooltip } from "../tooltip/Tooltip";
import { IconProps, SocialIconProps } from "../../types";
import "./SocialIcon.css";

const iconMap: {
    [K in IconType]:  React.FunctionComponent<IconProps>
} = {
    [IconType.GitHub]: GitHubIcon,
    [IconType.LinkedIn]: LinkedInIcon,
    [IconType.Twitter]: TwitterIcon,
    [IconType.Medium]: MediumIcon,
    [IconType.CodeSandbox]: CodesandboxIcon,
};

export const SocialIcon: React.FunctionComponent<SocialIconProps> = props => {
    const { type, url } = props;
    const Icon = withTooltip<IconProps & TooltipProps>(iconMap[type]!);
    return (
        <a
            className="socialIconAnchor"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            <Icon
                svgClassName="socialIcon"
                pathClassName="socialIconPath"
                title={type}
            />
        </a>
    );
};
