import React from "react";
import me from "../assets/me2.png";
// import me from "../assets/me.png";
import logo from "../assets/my logo.png";
import SectionTitle from "./Shared/SectionTitle";
import Container from "./Shared/Container";

const About = () => {
  return (
    <section>
      <Container>
        <div className="my-5 hidden md:block text-center">
          <SectionTitle sectionName={"About Me"}></SectionTitle>
        </div>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="bg-zinc-800 mt-8 py-8 px-6 rounded-lg lg:w-1/2 relative">
            <p className="text-justify">
              Hi, I’m Abdur Razzak, a passionate and creative junior web
              developer with a strong foundation in front-end development. I
              specialize in building dynamic, user-friendly websites and
              applications using modern technologies like{" "}
              <span className="bg-[#829a2c] font-bold">
                MongoDB, Express JS, Node JS, React JS, Tailwind CSS, and
                DaisyUI.
              </span>
            </p>
            <br />
            <p className="text-justify">
              I’m constantly learning and expanding my skills, staying
              up-to-date with the latest trends in web development to deliver
              innovative solutions. When I’m not coding, I enjoy exploring new
              tech tools and brainstorming ideas to improve user experiences.
              Let’s connect and build something amazing together!{" "}
            </p>
            <br />
            <p className="text-justify">
              {" "}
              From curiosity to creation, my journey as a web developer has been
              one of discovery, learning, and growth. It all began with a
              fascination for how websites work — the blend of design and
              technology that powers the modern web. That curiosity led me to
              take my first steps into coding, starting with the basics of HTML
              and CSS, and soon diving into JavaScript to bring ideas to life.
            </p>
            <img
              className="w-20 opacity-20 mt-2 absolute bottom-2 right-2"
              src={logo}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 ">
            <img
              className="w-2/3 md:w-2/3 lg:5/6 mx-auto "
              src={me}
              alt="Abdur Razzak"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
