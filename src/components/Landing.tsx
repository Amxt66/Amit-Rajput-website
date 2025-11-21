import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import HackerText from "./HackerText";
import gsap from "gsap";

import { useLoading } from "../context/LoadingProvider";

const Landing = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(
        ".landing-intro > *, .landing-info > *",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [isLoading]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <HackerText tag="h2" text="Hello! I'm" trigger={!isLoading} />
            <HackerText
              tag="h1"
              text={config.developer.fullName.toUpperCase()}
              trigger={!isLoading}
            />
          </div>
          <div className="landing-info">
            <HackerText tag="h3" text="A Software &" trigger={!isLoading} />
            <HackerText
              tag="h2"
              className="landing-info-h2"
              text="AI"
              trigger={!isLoading}
            />
            <HackerText
              tag="h2"
              className="landing-info-h2"
              text="ENGINEER"
              trigger={!isLoading}
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
