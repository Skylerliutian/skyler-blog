import React from "react";
import { useTrail, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons";

import BGImg from "./img/bg-img.svg";
import CSSImg from "./img/css.svg";
import HTMLImg from "./img/html.svg";
import GearImg from "./img/gear.svg";
import BilibiliIcon from "./img/bilibili.svg";
import styles from "./styles.module.css";

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      <a href="https://space.bilibili.com/231771308">
        <BilibiliIcon />
      </a>
      <a href="https://github.com/Skylerliutian">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a>
        <FontAwesomeIcon icon={faWeixin} size="lg" />
      </a>
    </animated.div>
  );
}

const IntroPart = () => {
  const animatedTexts = useTrail(2, {
    from: { opacity: 0, transform: "translateY(200px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 10,
      friction: 45,
      tension: 300,
    },
  });
  return (
    <animated.div className={styles.introPart}>
      <div className={styles.introText}>
        <animated.div
          className={styles.intro__attentiontext}
          style={animatedTexts[0]}
        >
          <span>Hello! 我是</span>
          <span className={styles.intro__name}>skyler</span>
        </animated.div>

        <SocialLinks animatedProps={animatedTexts[1]} />
      </div>
      <div className={styles.imgContainer}>
        <BGImg className={styles.bgImg} />
        <CSSImg className={styles.cssImg} />
        <HTMLImg className={styles.htmlImg} />
        <GearImg className={styles.gearImg} />
      </div>
    </animated.div>
  );
};

export default IntroPart;
