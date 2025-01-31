import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { uploadImage } from "../../../API/utils";
import toast from "react-hot-toast";

const Addprojects = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.className.value;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);
    const tags = form.tags.value.split(",").map((tag) => tag.trim());
    const details = form.details.value;
    const classInfo = {
      name,
      image: photoURL,
      details,
      trainerId: formData.availableTrainers,
      booking_count: 0,
    };

    try {
      await axiosSecure.post("/classes", classInfo);
      form.reset();
      toast.success("Successfuly Add.👍");
    } catch (err) {
      toast.error(err.message);
    }
    console.log(classInfo);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Class</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* project Name */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="text"
            id="className"
            name="title"
            placeholder="Enter class name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-2" htmlFor="image">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full rounded-none"
          />
        </div>

        {/* Live Link */}
        <div>
          <label
            htmlFor="live"
            className="block text-lg font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="url"
            id="live"
            name="live"
            placeholder="Enter live link"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            required
          />
        </div>

        {/* Repo Link */}
        <div>
          <label
            htmlFor="repo"
            className="block text-lg font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="url"
            id="repo"
            name="repo"
            placeholder="Enter live link"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            required
          />
        </div>

        {/* Forum Tags */}
        <div>
          <label htmlFor="tags" className="block font-medium mb-2">
            Tags (Comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            // value={formData.tags.join(", ")}
            // onChange={handleTagsChange}
            className="input input-bordered w-full rounded-none"
            placeholder="e.g., React, JavaScript, Web Development"
          />
        </div>

        {/* Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-lg font-medium text-gray-700"
          >
            Details
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Enter class details"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-orange-500 rounded-none hover:bg-orange-700 focus:outline-none "
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addprojects;
