import React, { useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { uploadImage } from "./API/utils";
import toast from "react-hot-toast";
import ButtonLoader from "./Shared/ButtonLoader";

const UserFeedback = () => {
  const axiosPublic = useAxiosPublic();
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    title: "",
  });
  const { name, review, title } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    const form = e.target;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);
    const rating = form["rating-2"].value;
    // console.log(photoURL);
    const reviewInfo = {
      image: photoURL,
      name,
      review,
      rating,
      title,
    };
    // console.log(reviewInfo);

    try {
      await axiosPublic.post("/feedbacks", reviewInfo);
      setFormData({ name: "", review: "" });
      form.reset();
      toast.success("Successfully Submit.👍");
      setPending(false);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Container>
        <div className="mt-12 mb-5">
          <SectionTitle sectionName={"Give valuable feedback"}></SectionTitle>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-500"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                placeholder="Enter client name"
                className="w-full px-4 py-2 border border-gray-800 rounded-none focus:outline-none"
                required
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-md font-medium text-zinc-300"
              >
                Designation with Organization
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
                placeholder="Student, DU / CEO, MindSprint"
                className="w-full px-4 py-2 border border-gray-800 rounded-none focus:outline-none "
                required
              />
            </div>

            {/* Review */}
            <div>
              <label
                htmlFor="review"
                className="block text-md font-medium text-zinc-300"
              >
                Review
              </label>
              <textarea
                id="review"
                name="review"
                placeholder="Enter client review"
                onChange={(e) =>
                  setFormData({ ...formData, review: e.target.value })
                }
                value={formData.review}
                className="w-full px-4 py-2 border border-gray-800 rounded-none  focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Image */}
            <div>
              <label
                className="block font-medium mb-2 text-zinc-300"
                htmlFor="image"
              >
                Image
              </label>
              <input
                type="file"
                id="profileImage"
                name="image"
                accept="image/*"
                className="file-input border-gray-00 file-input-bordered w-full rounded-none"
              />
            </div>
            {/* Rating */}
            <div>
              <label className="block text-lg font-medium text-zinc-300">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    value="1"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="2"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="3"
                    className="mask mask-star-2 bg-orange-300"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="4"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="5"
                    className="mask mask-star-2 bg-orange-300"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className={`w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#acd43e] rounded-none hover:bg-[#acd43e] focus:outline-none ${
                  pending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {pending ? <ButtonLoader></ButtonLoader> : "Submit Review"}
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UserFeedback;
