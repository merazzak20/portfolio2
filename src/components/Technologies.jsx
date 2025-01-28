import React, { useEffect, useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Technologies = () => {
  const axiosPublic = useAxiosPublic();
  const { data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axiosPublic.get("/technologies");
      return res.data;
    },
  });

  console.log(skills);
  return (
    <div className="my-16">
      <Container>
        <div className="my-5">
          <SectionTitle sectionName={"Tecnologies"}></SectionTitle>
          <p className="mt-2">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 justify-center">
          {skills?.map((skill) => (
            <div
              className="flex gap-2 items-center ring-2 ring-inset ring-zinc-50/10 rounded-xl p-3 hover:bg-zinc-800 transition-colors group"
              key={skill._id}
            >
              <figure>
                <img
                  className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 group-hover:bg-zinc-900 transition-colors p-3"
                  width={40}
                  height={32}
                  src={skill?.imgSrc}
                  alt={skill?.label}
                />
              </figure>
              <div className="flex flex-col ">
                <h3 className="text-xl font-semibold">{skill?.label}</h3>
                <p className="text-sm">{skill?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Technologies;
