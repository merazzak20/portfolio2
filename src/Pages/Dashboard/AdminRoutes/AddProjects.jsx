import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImage } from "../../../components/API/utils";

const Addprojects = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    title: "",
    liveLink: "",
    repoLink: "",
    tags: "",
    details: "",
  });
  // console.log(formData.title);
  const { title, liveLink, repoLink, tags, details } = formData;
  // console.log(title, liveLink, repoLink, tags, details);
  const tag = tags.split(",").map((tag) => tag.trim());
  console.log(tag);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);
    console.log(photoURL);
    const tags = form.tags.value.split(",").map((tag) => tag.trim());
    const details = form.details.value;
    const projectInfo = {
      imgSrc: photoURL,
      title,
      liveLink,
      repoLink,
      tags,
      details,
    };

    try {
      await axiosPublic.post("/projects", projectInfo);
      form.reset();
      toast.success("Successfuly Add.👍");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* project Name */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Project Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            placeholder="Enter class name"
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
            Project Image
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
            Live Link
          </label>
          <input
            type="url"
            id="live"
            name="live"
            placeholder="Enter live link"
            onChange={(e) =>
              setFormData({ ...formData, liveLink: e.target.value })
            }
            value={formData.liveLink}
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
            Github Repository Link
          </label>
          <input
            type="url"
            id="repo"
            name="repo"
            placeholder="Enter live link"
            onChange={(e) =>
              setFormData({ ...formData, repoLink: e.target.value })
            }
            value={formData.repoLink}
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            required
          />
        </div>

        {/* project Tags */}
        <div>
          <label
            htmlFor="tags"
            className="block font-medium mb-2 text-gray-700"
          >
            Tags (Comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            // value={formData.tags.join(", ")}
            // onChange={handleTagsChange}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            value={formData.tags}
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
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            value={formData.details}
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addprojects;
