import React, { useState } from "react";
import { Input } from "antd";
import "./index.css";

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
