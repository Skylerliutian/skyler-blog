import React, { useState } from "react";
import "./index.css";

const SwingButton = () => {
  const [left, setLeft] = useState("16px");
  const [current, setCurrent] = useState(0);
  const [rotate, setRotate] = useState(false);
  const handleClick = (index) => {
    setLeft(`calc(12px + ${index * 50}%)`);
    setTimeout(() => {
      setCurrent(index);
      setRotate(true);
    }, 200);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  };
  return (
    <div className="body">
      <div
        className={`button-wrapper ${rotate ? "rotate-wrap" : ""}`}
        style={{
          "--left": `${left}`,
          // 这里的倾斜角度，根据视觉自己调整
          "--rotate-deg": current === 0 ? "-10deg" : "20deg",
          "--wraper-origin": current === 0 ? "75% top" : "25% top",
        }}
      >
        <div
          className={`btn ${current === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          按钮1
        </div>
        <div
          className={`btn ${current === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          按钮2
        </div>
      </div>
    </div>
  );
};

export default SwingButton;
