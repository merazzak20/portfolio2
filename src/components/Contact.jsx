import React, { useContext, useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    try {
      axiosPublic.post("/messages", userMessage);
      form.reset();
      toast.success("Successfuly Add.👍");
    } catch (err) {
      toast.error(err.message);
    }

    console.log(userMessage);
    e.target.reset();
  };
  return (
    <div className="mt-14">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 p-6 rounded-md">
          <div className="w-full md:w-1/2 p-6">
            <div>
              <SectionTitle sectionName={"Get in Touch"}></SectionTitle>
              <p className="text-zinc-50 mt-2">
                Feel free to reach out to me for any project or collaboration.
              </p>
            </div>
            {/* Contact Information */}
            <div className="mt-6 space-y-2">
              {/* Email */}
              <div className="flex items-center text-zinc-50">
                <AiOutlineMail className="text-xl text-zinc-500 mr-2" />
                <a
                  href="mailto:info.merazzak@gmail.com"
                  className="hover:underline"
                >
                  info.merazzak@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center text-zinc-50">
                <AiOutlineWhatsApp className="text-xl text-zinc-500 mr-2" />
                <a
                  href="https://wa.me/yourwhatsappnumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +880 1629 122133
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-zinc-50">
                <FiMapPin className="text-xl text-zinc-500 mr-2" />
                <span>Gazipur, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-zinc-800 p-6 rounded-md shadow-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                {/* <label className="block text-zinc-100">Name</label> */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-gray-700">Email</label> */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-gray-700">Message</label> */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="message"
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#AFD138] text-zinc-50 py-2 px-4 rounded-none hover:bg-[#AFD138] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
