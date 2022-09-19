import React, { useState } from "react";
import Home from "./static/home.svg";
import Setting from "./static/setting.svg";
import Message from "./static/message.svg";
import Photos from "./static/photos.svg";
import Profile from "./static/profile.svg";
import "./index.css";

const NavBar = () => {
  const [current, setCurrent] = useState(0);
  const listMap = [
    {
      component: <Home />,
      name: "Home",
    },
    {
      component: <Profile />,
      name: "Profile",
    },
    {
      component: <Message />,
      name: "Message",
    },
    {
      component: <Photos />,
      name: "Photos",
    },
    {
      component: <Setting />,
      name: "Setting",
    },
  ];
  const handleClick = (index) => {
    setCurrent(index);
  };
  return (
    <div className="bg">
      <div className="navigation_nav">
        <ul>
          {listMap.map((item, index) => (
            <li
              className={`list_nav ${index === current ? "active_nav" : ""}`}
              onClick={() => handleClick(index)}
              key={index}
            >
              <a href="#javascript">
                <span className="icon_svg">{item.component}</span>
                <span className="text">{item.name}</span>
              </a>
            </li>
          ))}
          <div className="indicator" style={{ "--left": current }}></div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
