import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < rect.width + 20 && x > -20 && y < rect.height + 20 && y > -20) {
          mouseX = (x - rect.width / 2) * 0.5;
          mouseY = (y - rect.height / 2) * 0.5;
        } else {
          mouseX = 0;
          mouseY = 0;
        }
      };

      const onMouseLeave = () => {
        mouseX = 0;
        mouseY = 0;
      };

      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseleave", onMouseLeave);

      const animationId = requestAnimationFrame(updatePosition);

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseleave", onMouseLeave);
        cancelAnimationFrame(animationId);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.contact.github} target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        {config.contact.twitter && (
          <span>
            <a href={config.contact.twitter} target="_blank">
              <FaXTwitter />
            </a>
          </span>
        )}
        {config.contact.instagram && (
          <span>
            <a href={config.contact.instagram} target="_blank">
              <FaInstagram />
            </a>
          </span>
        )}
      </div>
      {config.contact.resume && (
        <a className="resume-button" href={config.contact.resume} target="_blank">
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
