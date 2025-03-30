import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IoIosLink } from "react-icons/io";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Shared/Loader";

const Portfolio = () => {
  const axiosPublic = useAxiosPublic();
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });
  // if (isLoading) return <Loader></Loader>;
  // console.log(projects);
  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container>
        <div className="my-5">
          <SectionTitle sectionName={"My Portfolios"}></SectionTitle>
          <p className="mt-2">
            A portfolio of dynamic, responsive, and user-friendly web
            applications crafted with passion and precision.
          </p>
        </div>
        <Slider {...settings}>
          {projects?.map((project) => (
            <div className="px-2" key={project._id}>
              <div className="card card-compact bg-zinc-900 shadow-xl border border-zinc-50/10 group p-2">
                <figure className="overflow-hidden ">
                  <img
                    className=" group-hover:scale-110 transition rounded-md"
                    src={project?.imgSrc}
                    alt={project?.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-zinc-50 font-bold">
                    {project?.title}
                  </h2>
                  <p>{project?.details?.slice(0, 95)}...</p>
                  <div className="space-x-2">
                    {project?.tags?.map((tag, idx) => (
                      <div
                        key={idx}
                        className="badge bg-zinc-700 border-none text-zinc-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="text-right flex gap-2">
                    {project?.liveLink && (
                      <Link
                        to={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                      >
                        <IoIosLink className="text-xl text-zinc-800" />
                      </Link>
                    )}
                    {project?.repoLink && (
                      <Link
                        to={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                      >
                        <FaGithub className="text-xl text-zinc-800" />
                      </Link>
                    )}
                    {project?._id && (
                      <Link
                        to={project._id}
                        className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]"
                      >
                        <FaArrowRight className="text-xl text-zinc-800" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Portfolio;
