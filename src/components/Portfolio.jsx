import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

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
              <div className="card card-compact bg-base-100 shadow-xl group">
                <figure className="overflow-hidden ">
                  <img
                    className=" group-hover:scale-110 
                transition transition-colors"
                    src={project?.imgSrc}
                    alt={project?.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-zinc-700 font-bold">
                    {project?.title}
                  </h2>
                  <div>
                    {project?.tags?.map((tag, idx) => (
                      <div
                        key={idx}
                        className="badge bg-[#afd138] text-zinc-50"
                      >
                        {tag}
                      </div>
                    ))}
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
