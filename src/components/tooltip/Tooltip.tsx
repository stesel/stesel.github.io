import * as React from "react";
import "./Tooltip.css";

export interface TooltipProps {
    title: string;
}

export const Tooltip: React.FunctionComponent<TooltipProps> = props => {
    const [visible, setVisible] = React.useState<boolean>(false);

    let timeout: number | null = null;

    const startShowing = () => {
        setVisible(true);
        timeout = window.setTimeout(() => {
            stopShowing();
        }, 2000);
    };

    const stopShowing = () => {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        setVisible(false);
    };

    const { title } = props;

    return (
        <div
            className="tooltip"
            onMouseEnter={startShowing}
            onMouseLeave={stopShowing}
            onTouchStart={startShowing}
            onTouchEnd={stopShowing}
        >
            {props.children}
            <span className={`tooltipText ${visible && "visible"}`}>
                {title}
            </span>
        </div>
    );
};

export const withTooltip = <A extends TooltipProps>(
    Component: React.FunctionComponent<Pick<A, Exclude<keyof A, keyof TooltipProps>>>,
): React.FunctionComponent<A> => {
    return (props: A) => {
        const {title, ...rest} = props;
        return (
            <Tooltip title={title}>
                <Component {...rest} />
            </Tooltip>
        );
    };
};
