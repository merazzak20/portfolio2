import React, { useState } from "react";
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
import { FaCaretDown } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";

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
          <p className="mt-2">
            Honest feedback from clients and colleagues who have experienced my
            web development expertise, creativity, and commitment to excellence.
          </p>
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
                      <h4 className="text-gray-500 text-sm font-semibold">
                        {feed.occupation || ""}, {feed.organization || ""}
                      </h4>
                      <h4 className="text-gray-500 text-sm">
                        {feed.region || ""}
                      </h4>
                    </div>
                  </div>

                  {/* Review Text */}
                  {/* <p className="mt-3 text-gray-600">
                    {feed?.review.length > 100
                      ? `${feed.review.slice(0, 100)}...`
                      : feed?.review}
                  </p> */}

                  {/* Review Text with Read More/Collapse */}
                  <ReviewText review={feed?.review} />

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

const ReviewText = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className="mt-3 text-gray-600">
        {isExpanded
          ? review
          : review?.slice(0, 100) + (review?.length > 100 ? "..." : "")}
      </p>
      {review?.length > 100 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#c0eb4a] mt-2 text-2xl"
        >
          {isExpanded ? <TiArrowSortedUp /> : <FaCaretDown />}
        </button>
      )}
    </div>
  );
};

export default Feedback;
