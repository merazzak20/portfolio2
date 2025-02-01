import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImage } from "../../../components/API/utils";

const AddFeedback = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });
  const { name, review } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);
    const rating = form["rating-2"].value;
    console.log(photoURL);
    const reviewInfo = {
      image: photoURL,
      name,
      review,
      rating,
    };
    console.log(reviewInfo);

    // try {
    //   await axiosPublic.post("/projects", projectInfo);
    //   form.reset();
    //   toast.success("Successfuly Add.👍");
    // } catch (err) {
    //   toast.error(err.message);
    // }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            placeholder="Enter client name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
            required
          />
        </div>

        {/* Image */}
        <div>
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="image"
          >
            Client Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full rounded-none"
          />
        </div>

        {/* review */}
        <div>
          <label
            htmlFor="review"
            className="block text-lg font-medium text-gray-700"
          >
            review
          </label>
          <textarea
            id="review"
            name="review"
            placeholder="Enter client review"
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
            value={formData.review}
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* rating */}
        <div className="flex justify-between items-center">
          <div className="rating mt-1 mx-auto">
            <input
              type="radio"
              name="rating-2"
              value="1"
              className="mask mask-star-2 bg-orange-600"
            />
            <input
              type="radio"
              name="rating-2"
              value="2"
              className="mask mask-star-2 bg-orange-600"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              value="3"
              className="mask mask-star-2 bg-orange-600"
            />
            <input
              type="radio"
              name="rating-2"
              value="4"
              className="mask mask-star-2 bg-orange-600"
            />
            <input
              type="radio"
              name="rating-2"
              value="5"
              className="mask mask-star-2 bg-orange-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedback;
