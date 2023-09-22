import React, {useState, createRef} from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";
import { skillsSection } from '../../portfolio'

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };


  const Skills = ({cardInfo}) => {
    return cardInfo
      ? cardInfo.skills.map((item, i) => (
        <span
          key={i}
          className={"subTitle skill-bubble"}
        >
          {item}
        </span>
      ))
      : null;
  };

  return (
    <div className={isDark ? 'experience-card-dark' : 'experience-card'}>
      <div className="experience-container experience-grid">
        <h5
          className={
            isDark
              ? 'experience-text-date dark-mode-text'
              : 'experience-text-date'
          }
        >
          {cardInfo.date}
        </h5>
        <div className="experience-text-details">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
          <h5
            className={
              isDark
                ? 'experience-text-role dark-mode-text'
                : 'experience-text-role'
            }
          >
            {cardInfo.role}
          </h5>
          <p
            className={
              isDark
                ? 'subTitle experience-text-desc dark-mode-text'
                : 'subTitle experience-text-desc'
            }
          >
            {cardInfo.desc}
          </p>

          <div className="skills">
            {Skills}
          </div>
        </div>
      </div>
    </div>
  );
}
