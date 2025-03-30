import React, { useContext, useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import ButtonLoader from "./Shared/ButtonLoader";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useContext(AuthContext);
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleChange = async (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    const userMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const sendMail = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Abdur Razzak", // Add the recipient's name here
      reply_to: formData.email, // Reply-to email (optional)
    };
    try {
      await axiosPublic.post("/messages", userMessage);
      await emailjs
        .send(
          import.meta.env.VITE_SERVICE_KEY,
          import.meta.env.VITE_TEMPLATE_KEY,
          sendMail,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setFormData(
        (formData.name = ""),
        (formData.email = ""),
        (formData.message = "")
      );
      toast.success("Your Message Successfully Send.👍");
      setPending(false);
      e.target.reset();
    } catch (err) {
      toast.error(err.message);
    }

    // console.log(userMessage);
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
                  href="https://wa.me/+8801629122133"
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  placeholder="message"
                  style={{ resize: "none" }}
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-[#afd138] text-zinc-800 font-semibold py-2 px-4 rounded-none hover:bg-[#9fbe31] transition ${
                  pending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {pending ? <ButtonLoader></ButtonLoader> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
