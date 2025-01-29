import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IoIosLink } from "react-icons/io";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const axiosPublic = useAxiosPublic();
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });
  console.log(projects);
  return (
    <div>
      <Container>
        <div className="my-5">
          <SectionTitle sectionName={"My Portfolios"}></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {projects?.map((project) => (
            <div key={project._id}>
              <div className="card card-compact bg-zinc-800 shadow-xl border border-zinc-600 group p-2">
                <figure className="overflow-hidden ">
                  <img
                    className=" group-hover:scale-110 transition"
                    src={project?.imgSrc}
                    alt={project?.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-zinc-50 font-bold">
                    {project?.title}
                  </h2>
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
                    <Link className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]">
                      <IoIosLink className="text-xl text-zinc-800" />
                    </Link>
                    <Link className="bg-[#AFD138] border-none rounded-lg btn btn-sm hover:bg-[#99b825]">
                      <MdReadMore className="text-xl text-zinc-800" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
