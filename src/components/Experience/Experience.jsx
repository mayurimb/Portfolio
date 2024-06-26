import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <React.Fragment>
      <div className="ProjectWrapper" id="experience">
        <div className="Container">
          <div className="SectionTitle experience">Experience and Education</div>
          <ExperienceCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Experience;
