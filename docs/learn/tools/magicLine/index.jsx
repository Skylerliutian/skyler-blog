import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWeixin,
  faBilibili,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const MagicLine = () => {
  return (
    <ul className="magic-wrapper">
      <li style={{ "--clr": "#161b22" }}>
        <FontAwesomeIcon className="fa" icon={faGithub} />
      </li>
      <li style={{ "--clr": "#07c160" }}>
        <FontAwesomeIcon className="fa" icon={faWeixin} />
      </li>
      <li style={{ "--clr": "#00AEEC" }}>
        <FontAwesomeIcon className="fa" icon={faBilibili} />
      </li>
      <li style={{ "--clr": "#ff0000" }}>
        <FontAwesomeIcon className="fa" icon={faYoutube} />
      </li>
    </ul>
  );
};

export default MagicLine;
