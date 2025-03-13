import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";

const SingleProject = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: project } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projects/${id}`);
      return res.data;
    },
  });

  return (
    <div className="pt-20  text-white">
      <Container>
        {/* Project Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">{project?.title}</h2>
          {/* <p className="text-sm text-gray-400 mt-2">
            || {project?.category} - Non Profit Website
          </p> */}
        </div>

        {/* Grid Layout for Project Details */}
        <div className="grid grid-cols-1 gap-5 my-10 items-start">
          {/* Left Content (Project Details & Image) */}
          <div className="max-h-[70vh]">
            <img
              className="rounded-lg shadow-md w-full max-h-[70vh] object-cover"
              src={project?.imgSrc}
              alt={project?.title}
            />
          </div>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* left Content */}
          <div className="md:col-span-8 space-y-4">
            <SectionTitle
              sectionName={"Short Description of this Project"}
            ></SectionTitle>

            <p className="text-justify text-gray-300">{project?.details}</p>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2">
              {project?.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <Link
                to={project?.liveLink}
                className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm "
              >
                Live Link
              </Link>
              <Link
                to={project?.repoLink}
                className="bg-[#AFD138] px-5 py-2 text-black font-semibold rounded-sm"
              >
                Repository
              </Link>
            </div>
          </div>
          {/* Right Content (Information Panel) */}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg md:col-span-4 md:-mt-32">
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <div className="space-y-4">
              <p>
                <span className="font-bold text-gray-300">Project Name:</span>{" "}
                {project?.title}
              </p>
              <p>
                <span className="font-bold text-gray-300">Clients:</span>{" "}
                {project?.client || "Unknown"}
              </p>
              <p>
                <span className="font-bold text-gray-300">Budget:</span>{" "}
                {project?.budget || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProject;
