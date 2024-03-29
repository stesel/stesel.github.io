import * as React from "react";
import { IconProps } from "../../types";

export const MediumIcon: React.FunctionComponent<IconProps> = props => {
    const { svgClassName, pathClassName } = props;
    return (
        /* tslint:disable:max-line-length */
        <svg className={svgClassName} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className={pathClassName} d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
        /* tslint:enable:max-line-length */
    );
};
