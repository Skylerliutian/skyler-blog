import React from "react";
import { useTrail } from "react-spring";

import BGImg from "./img/bg-img.svg";
import CSSImg from "./img/css.svg";
import HTMLImg from "./img/html.svg";
import GearImg from "./img/gear.svg";
import styles from "./styles.module.css";

// function SocialLinks({ animatedProps, ...props }) {
//   // const { isDarkTheme } = useThemeContext();
//   return (
//     <animated.div className={styles.social__links} style={animatedProps}>
//       <a href="https://space.bilibili.com/302954484">
//         <BilibiliIcon />
//       </a>
//       <a href="https://www.linkedin.com/in/zxuqian/">
//         <FontAwesomeIcon icon={faLinkedin} size="lg" />
//       </a>
//       <a href="https://github.com/zxuqian">
//         <FontAwesomeIcon icon={faGithub} size="lg" />
//       </a>
//       <a href="https://blog.csdn.net/fengqiuzhihua">
//         <CSDNIcon />
//       </a>
//       <div className={`dropdown ${styles.dropdown} dropdown--hoverable`}>
//         <FontAwesomeIcon icon={faWeixin} size="lg" />
//         <img
//           width="50%"
//           className={`dropdown__menu ${styles.dropdown__menu}`}
//           src={useBaseUrl("/img/publicQR.webp")}
//         />
//       </div>
//     </animated.div>
//   );
// }

const IntroPart = () => {
  return (
    <div className={styles.introPart}>
      <div className={styles.introText}>
        <div className={styles.intro__attentiontext}>
          <span>Hello! 我是</span>
          <span className={styles.intro__name}>skyler</span>
        </div>
        <div>记录生活，记录知识</div>

        {/* <SocialLinks animatedProps={animatedTexts[4]} /> */}
      </div>
      <div className={styles.imgContainer}>
        <BGImg className={styles.bgImg} />
        <CSSImg className={styles.cssImg} />
        <HTMLImg className={styles.htmlImg} />
        <GearImg className={styles.gearImg} />
      </div>
    </div>
  );
};

export default IntroPart;
