import type { IconType } from "react-icons";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com",
    Icon: RiDribbbleLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    Icon: RiPinterestLine,
  },
  {
    name: "Github",
    link: "https://github.com/Delta-Polder-Indonesia/Modern-Portfolio",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-1.5 sm:gap-x-3 text-lg">
      {socialData.map((social) => (
        <a
          key={social.name}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-2 hover:bg-accent/80"
              : "p-2 hover:text-accent"
          } flex items-center justify-center size-10 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
