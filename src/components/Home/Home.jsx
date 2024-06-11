import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  ScrollDown,
  ScrollLink,
  ProfileImage
} from "./HomeElements";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Mayuri Bashirabadkar</h1>
            <p className="description">
              I'm a software developer skilled in Full-Stack Development and
              Software Engineering.
            </p>
          </HeroLeft>
          <ProfileImage src="./profilephoto.jpg" alt="Mayuri Bashirabadkar" />
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img src="./scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Home;
