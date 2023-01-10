import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/faqs.json";
export default function FaqsAnimation() {
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
      <Lottie options={defaultOptions} height={450} width={400} />
    </div>
  );
}
