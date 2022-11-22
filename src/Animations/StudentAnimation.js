import React from "react";
import Lottie from "react-lottie";
import animationData from "../Assets/animations/student.json";
export default function StudentAnimation() {
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
      <Lottie options={defaultOptions} height={350} width={300} />
    </div>
  );
}
