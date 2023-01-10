import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/links.json";
export default function UsefullLinksAnimation() {
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
      <Lottie options={defaultOptions} height={550} width={600} />
    </div>
  );
}
