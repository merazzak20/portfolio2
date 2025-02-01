import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";

const Feedback = () => {
  const axiosPublic = useAxiosPublic();
  const { data: feedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/feedbacks");
      return data;
    },
  });
  return (
    <div>
      <Container>
        <div className="my-14">
          <SectionTitle sectionName={"What People Says"}></SectionTitle>
        </div>

        <div>
          <Swiper
            cssMode={true}
            slidesPerView={2}
            loop={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              enabled: true,
            }}
            breakpoints={{
              230: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {feedbacks?.map((feed) => (
              <SwiperSlide className="px-20" key={feed?._id}>
                <div className=" text-center flex flex-col items-center">
                  <img
                    className="w-20 h-20 rounded-full border-[#B9FF00] border-4 object-cover"
                    src={feed?.image}
                    alt={feed?.name}
                  />
                  <p className="text-2xl font-bold text-center my-3">
                    {feed?.name}
                  </p>
                  <p>{feed?.review}</p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={parseFloat(feed.rating)}
                    readOnly
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
