import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SingleProject = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projects/${id}`);
      return res.data;
    },
  });
  console.log(project);
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default SingleProject;
