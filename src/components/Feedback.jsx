import React from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Shared/Loader";

const Feedback = () => {
  const axiosPublic = useAxiosPublic();
  const { data: feedbacks, isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/feedbacks");
      return data;
    },
  });
  if (isLoading) return <Loader></Loader>;
  return (
    <div>
      <Container>
        <div className="my-14">
          <SectionTitle sectionName={"What People Say"} />
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
              disableOnInteraction: true,
            }}
            breakpoints={{
              230: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {feedbacks?.map((feed) => (
              <SwiperSlide key={feed?._id} className="px-6">
                <div className="p-6 rounded-lg shadow-lg">
                  {/* User Info */}
                  <div className="flex gap-4 items-center">
                    <img
                      src={feed.image}
                      alt={feed.name}
                      className="w-16 h-16 border-[#B9FF00] border-2 object-cover rounded-full mb-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{feed.name}</h2>
                      <h4 className="text-gray-500 text-sm">
                        {feed.title || ""}
                      </h4>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-gray-600">
                    {feed?.review.length > 100
                      ? `${feed.review.slice(0, 100)}...`
                      : feed?.review}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < feed.rating ? "opacity-100" : "opacity-30"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
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
