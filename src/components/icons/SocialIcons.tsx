import * as React from "react";
import { SocialIconsProps } from "../../types";
import { SocialIcon } from "./SocialIcon";
import "./SocialIcons.css";

export const SocialIcons: React.FunctionComponent<SocialIconsProps> = props => {
    const { icons } = props;
    return (
        <div className="socialIcons">
            {icons.map((icon => {
                const { type, url } = icon;
                return (
                    <SocialIcon
                        type={type}
                        url={url}
                        key={type}
                    />
                );
            }))}
        </div>
    );
};
