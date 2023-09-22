import React, {useContext} from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              My journey into software development started at a Point of Sale (POS) company, where I gained invaluable experience in building customer-facing products. Over the course of 5+ years,
              I have honed my craft in writing high-quality, well-tested code that is both maintainable and clean. I have a solid foundation in Javascript and TypeScript, with hands-on experience in React.
            </p>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              My enthusiasm for frontend development extends beyond writing code.
              I am committed to the entire product development lifecycle, from idea conception to design and through to implementation.
              I thrive in fast-paced environments, striking a thoughtful balance between delivering code swiftly and maintaining high quality by adhering to best practices.
            </p>

            {/*<div style={{marginTop: '30px'}}>*/}
            {/*  {skillsSection.skills.map((skills, i) => {*/}
            {/*    return (*/}
            {/*      <p*/}
            {/*        key={i}*/}
            {/*        className={*/}
            {/*          isDark*/}
            {/*            ? "dark-mode subTitle skills-text"*/}
            {/*            : "subTitle skills-text"*/}
            {/*        }*/}
            {/*      >*/}
            {/*        {skills}*/}
            {/*      </p>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</div>*/}

            <SoftwareSkill />

          </div>
        </Fade>
      </div>
    </div>
  );
}
