import styles from "./ui.module.css";

import fbDark from "../assets/social/fbDark.svg";
import fbLight from "../assets/social/fbLight.svg";

import igDark from "../assets/social/igDark.svg";
import igLight from "../assets/social/igLight.svg";

import ytDark from "../assets/social/ytDark.svg";
import ytLight from "../assets/social/ytLight.svg";

const socials = [
  {
    name: "instagram",
    link: "https://www.instagram.com/",
    dark: igDark,
    light: igLight,
  },
  {
    name: "facebook",
    link: "https://uk-ua.facebook.com/",
    dark: fbDark,
    light: fbLight,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    dark: ytDark,
    light: ytLight,
  },
];

export const Socials = ({
  theme,
  className,
}: {
  theme: "light" | "dark";
  className?: string;
}) => {
  return (
    <div className={`${styles.socials} ${className || ""}`}>
      {socials.map((social) => (
        <SocialElement
          key={social.name}
          image={social[theme]}
          link={social.link}
        />
      ))}
    </div>
  );
};

const SocialElement = ({ image, link }: { image: string; link: string }) => {
  return (
    <div className={styles.socialElement}>
      <a href={link}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};
