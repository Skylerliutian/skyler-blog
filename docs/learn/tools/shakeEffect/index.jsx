import React, { useState } from "react";
import "./index.css";
import Input from "antd/es/input";
// FIXME: antd样式会冲突
// import "antd/es/input/style/css";

const ShakeEffect = () => {
  const [shake, setShake] = useState(false);
  return (
    <Input
      className={shake ? "apply-shake" : ""}
      size="large"
      placeholder="请输入文字"
      onClick={() => {
        setShake(true);
        setTimeout(() => {
          setShake(false);
        }, 820);
      }}
    ></Input>
  );
};

export default ShakeEffect;
