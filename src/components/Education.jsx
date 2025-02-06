import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";

const Education = () => {
  return (
    <div className="my-12">
      <Container>
        <div>
          <SectionTitle
            sectionName={"Eduaction & Qualifications"}
          ></SectionTitle>
        </div>
        {/* Education Section */}
        <div className="mt-8">
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-white">
              Bachelor of Science in Computer Science - (BSC)
            </h4>
            <p className="text-gray-300 font-semibold">
              Uttara University, 2021 - 2025
            </p>
            <p className="mt-2 text-gray-300 text-justify leading-relaxed">
              Currently pursuing my degree in Computer Science, where I'm
              focusing on software development, web technologies, and database
              management. I'm passionate about coding and love solving complex
              problems through technology.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-white">
              Higher Secondary Certificate - (HSC)
            </h4>
            <p className="text-gray-300 font-semibold">
              Addhapak Rafiqul Islam Academy & College, 2017 - 2019
            </p>
            <p className="mt-2 text-gray-300 text-justify leading-relaxed">
              Completed my HSC in Science, where I developed a strong foundation
              in mathematics, physics, chemistry, and computer science. This
              background helped me build analytical and problem-solving skills
              that I apply in web development today.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
