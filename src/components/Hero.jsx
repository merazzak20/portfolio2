import React from "react";
import me from "../assets/me1.png";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import Marquee from "react-fast-marquee";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 justify-center items-center sm:pt-12 md:pt-0">
      <div className="text-left my-5 space-y-2">
        <h2 className="text-2xl font-semibold">Hello,</h2>
        <h1 className="text-5xl md:text-7xl font-semibold text-[#afd138] uppercase">
          Abdur Razzak <span className="text-zinc-50 text-6xl">.</span>
        </h1>
        <h4 className="text-xl">I'm MERN Stack Developer.</h4>
        <a
          href="https://drive.google.com/file/d/17rehO2G9AXlp3cMFs1UCXEcq0Fvzv-Gn/view"
          target="_blank"
          className="btn btn-outline rounded-full text-[#afd138] hover:bg-[#afd138]"
        >
          Download Resume <FaDownload></FaDownload>
        </a>
        <Marquee speed={40} className="">
          "Crafting seamless digital experiences, one line of code at a time." -
          "Where creativity meets code welcome to my portfolio." - "Turning
          ideas into impactful web solutions." -
        </Marquee>
      </div>
      <div className="mx-auto">
        <img
          className="sm:w-3/4 mx-auto md:w-full text-center"
          src={me}
          alt="Abdur Razzak Portait"
        />
      </div>

      {/* social icons */}
      <div className="join join-vertical fixed left-0 bottom-1/3 rounded-none border-none">
        <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
          <FaFacebookSquare className="text-xl " />
        </button>
        <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
          <FaGithub className="text-xl" />
        </button>
        <button className="btn border-none join-item bg-[#afd138] text-zinc-50">
          <ImBehance2 className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
