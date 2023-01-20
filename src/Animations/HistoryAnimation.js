import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/history.json";
export default function HistoryAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={350} width={450} />
        </div>
    );
}
