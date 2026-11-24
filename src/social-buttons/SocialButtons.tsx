import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { siteConfig } from "../config/site";
import "./SocialButtons.css";

export interface SocialButtonsProps {
  github?: string;
  linkedin?: string;
  className?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({
  github = siteConfig.socials.github,
  linkedin = siteConfig.socials.linkedin,
  className = "",
}) => {
  const socials = [
    { name: "GitHub", url: github, icon: <FaGithub /> },
    { name: "LinkedIn", url: linkedin, icon: <FaLinkedinIn /> },
  ];

  // Filter out any social link that is not defined
  const activeSocials = socials.filter((social) => !!social.url);

  if (activeSocials.length === 0) {
    return null;
  }

  return (
    <div className={`social-buttons-pill ${className}`}>
      {activeSocials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-buttons-item"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
