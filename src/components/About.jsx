import React from "react";
import SectionTitle from "./Shared/SectionTitle";

const About = () => {
  return (
    <section>
      <div>
        <SectionTitle sectionName={"About Me"}></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="bg-zinc-800 mt-8 py-8 px-6 rounded-lg">
          <p className="text-justify">
            Hi, I’m Abdur Razzak, a passionate and creative junior web developer
            with a strong foundation in front-end development. I specialize in
            building dynamic, user-friendly websites and applications using
            modern technologies like{" "}
            <span className="bg-[#829a2c] font-bold">
              MongoDB, Express JS, Node JS, React JS, Tailwind CSS, and DaisyUI.
            </span>
          </p>
          <br />
          <p className="text-justify">
            I’m constantly learning and expanding my skills, staying up-to-date
            with the latest trends in web development to deliver innovative
            solutions. When I’m not coding, I enjoy exploring new tech tools and
            brainstorming ideas to improve user experiences. Let’s connect and
            build something amazing together!{" "}
          </p>
          <br />
          <p className="text-justify">
            {" "}
            From curiosity to creation, my journey as a web developer has been
            one of discovery, learning, and growth. It all began with a
            fascination for how websites work — the blend of design and
            technology that powers the modern web. That curiosity led me to take
            my first steps into coding, starting with the basics of HTML and
            CSS, and soon diving into JavaScript to bring ideas to life.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
