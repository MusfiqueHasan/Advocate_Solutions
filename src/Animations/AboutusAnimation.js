import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/aboutus.json";
export default function AboutusAnimation() {
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
      <Lottie options={defaultOptions} height={400} width={500} />
    </div>
  );
}
