import * as React from "react";

export const CodesandboxIcon: React.FunctionComponent<{
    svgClassName: string;
    pathClassName: string;
}> = props => {
    const { svgClassName, pathClassName } = props;
    return (
        <svg className={svgClassName} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>CodeSandbox Icon</title>
            <path className={pathClassName} d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
        </svg>

    );
};
