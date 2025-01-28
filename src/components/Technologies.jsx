import React, { useEffect, useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";

const Technologies = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("technologies.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  console.log(skills);
  return (
    <div className="my-16">
      <Container>
        <div className="mt-5 text-center">
          <SectionTitle sectionName={"Skills"}></SectionTitle>
        </div>
        <div className="flex gap-5 justify-center">
          {skills.map((skill) => (
            <div className="flex gap-2 items-center" key={skill._id}>
              <figure>
                <img
                  width={40}
                  height={32}
                  src={skill?.imgSrc}
                  alt={skill?.label}
                />
              </figure>
              <div className="flex flex-col ">
                <h3 className="text-xl font-semibold">{skill?.label}</h3>
                <p className="text-sm">{skill?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Technologies;
