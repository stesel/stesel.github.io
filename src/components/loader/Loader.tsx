import * as React from "react";
import "./Loader.css";
import { useFetch } from "../../data/useFetch";
import { DataUrl } from "../../consts/dataUrl";

export const Loader: React.FunctionComponent = () => {
    return (
        <div className="loader appearing">
            <div className="loaderBall loaderBall1" />
            <div className="loaderBall loaderBall2" />
            <div className="loaderBall loaderBall3" />
            <div className="loaderBall loaderBall4" />
            <div className="loaderBall loaderBall5" />
        </div>
    );
};

export const withLoader = <P extends {}>(url: DataUrl) => {
    return (Component: React.FunctionComponent<P>): React.FunctionComponent => {
        return () => {
            const data = useFetch<P>(url);
            if (!data) {
                return <Loader />;
            }
            return <Component {...data} />;
        }
    }
};
