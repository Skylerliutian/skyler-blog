import React from "react";
import "./style.css";

const DateComponent = ({ date }) => {
  const time = new Date(date);
  const month = time.getMonth();
  const day = time.getDay();
  return (
    <div className="post-item-date">
      <div className="month">{month}月</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default DateComponent;
