import React, { useState, useEffect } from "react";
import "./index.css";

const ScrollNum = ({ num }) => {
  const [showAnimate, setShowAnimate] = useState(true);
  useEffect(() => {
    setShowAnimate(true);
    console.log(num);
  }, [num]);
  return (
    <>
      <div
        className={`scroll-num ${showAnimate ? "border-animate" : ""}`}
        style={{ "--i": num, "--delay": 2 }}
        onAnimationEnd={() => {
          setShowAnimate(false);
        }}
      >
        <ul className={`${showAnimate ? "animate" : ""}`}>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </div>
    </>
  );
};

export default ScrollNum;
