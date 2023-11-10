import React from "react";

const EducationCard = ({ degree, institution, session, gpa }) => {
  return (
    <div className="company">
      <h3
        className="designation"
        style={{ lineHeight: "3", marginBottom: "-10px" }}
      >
        {degree}
      </h3>
      <p className=" ">{institution}</p>
      <p className=" ">Session : {session}</p>
      <p className=" ">GPA : {gpa}</p>
    </div>
  );
};

export default EducationCard;
