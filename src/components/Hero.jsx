import React from "react";
// import me from "../assets/me1.png";
import image from "../assets/webimage4.png";
// import image from "../assets/webimage2.png";
// import image from "../assets/webb.jpg";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import Marquee from "react-fast-marquee";
import { FaDownload, FaLinkedinIn } from "react-icons/fa6";
import { TbArrowLoopRight2 } from "react-icons/tb";
import Container from "./Shared/Container";

const Hero = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center sm:pt-12 md:pt-0">
        <div className="col-span-12 lg:col-span-5 hidden lg:block">
          <img
            className="sm:w-3/4 mx-auto md:w-full pt-10 text-center"
            src={image}
            alt="Abdur Razzak Portait"
          />
        </div>
        <div className="my-10 mt-28 sm:mt-16 md:mt-24 lg:my-6 col-span-12 lg:col-span-7 text-left ">
          <h2 className="text-2xl font-semibold">Hello - I'm</h2>
          <h1 className="text-5xl md:text-7xl font-semibold  mb-2 bg-gradient-to-r from-[#c0eb4a] to-zinc-950 bg-clip-text text-transparent">
            {/* bg-gradient-to-r from-emerald-500 to-zinc-800 bg-clip-text text-transparent */}
            Abdur Razzak
          </h1>
          <h4 className="text-xl mb-3">A MERN Stack Developer.</h4>
          <div className="space-x-2">
            <a
              href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view"
              target="_blank"
              className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
            >
              Download Resume <FaDownload></FaDownload>
            </a>
            <a
              href="#About"
              className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
            >
              Learn More <TbArrowLoopRight2 className="text-xl" />
            </a>
          </div>
          <Marquee speed={40} className="mt-4">
            "Crafting seamless digital experiences, one line of code at a time."
            - "Where creativity meets code welcome to my portfolio." - "Turning
            ideas into impactful web solutions." -
          </Marquee>
        </div>

        {/* social icons */}
        <div className="join join-vertical fixed left-0 bottom-28 rounded-none border-none z-20">
          <a href="https://www.linkedin.com/in/merazzak20/" target="_blank">
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
      </section>
    </Container>
  );
};

export default Hero;
