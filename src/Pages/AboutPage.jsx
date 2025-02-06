import React from "react";
import Container from "../components/Shared/Container";
import me from "../assets/me2.png";
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import Education from "../components/Education";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <section className="min-h-screen flex items-center justify-evenly">
          <div className="mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Profile Image */}
              <div className="flex justify-evenly">
                <img
                  src={me}
                  alt="Abdur Razzak"
                  className="w-72 md:w-96 rounded-lg mt-4 shadow-lg"
                />
              </div>

              {/* Right Column - Introduction */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#AFD138]">
                  About Me
                </h2>
                <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                  Hi, I'm <span className="font-semibold">Abdur Razzak</span>, a
                  passionate web developer skilled in building responsive,
                  user-friendly, and modern websites. I specialize in front-end
                  and back-end technologies, including React, Tailwind, Node.js,
                  and MongoDB. My goal is to create digital experiences that
                  help businesses grow online.
                </p>
                <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                  I’m constantly learning and expanding my skills, staying
                  up-to-date with the latest trends in web development to
                  deliver innovative solutions. When I’m not coding, I enjoy
                  exploring new tech tools and brainstorming ideas to improve
                  user experiences. Let’s connect and build something amazing
                  together!
                </p>

                {/* Social Links */}
                <div className="join join-horizontal gap-2 mt-5 rounded-none border-none z-20">
                  <a
                    href="https://www.linkedin.com/in/merazzak20/"
                    target="_blank"
                  >
                    <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
                      <FaLinkedinIn className="text-xl " />
                    </button>
                  </a>
                  <a href="https://www.facebook.com/merazzak20" target="_blank">
                    <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
                      <FaFacebookSquare className="text-xl " />
                    </button>
                  </a>
                  <a href="https://github.com/merazzak20" target="_blank">
                    <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
                      <FaGithub className="text-xl" />
                    </button>
                  </a>
                  <a href="https://www.behance.net/merazzak/" target="_blank">
                    <button className="btn border-none join-item bg-[#afd138] text-zinc-50">
                      <ImBehance2 className="text-xl" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Education></Education>
      </Container>
    </div>
  );
};

export default AboutPage;
