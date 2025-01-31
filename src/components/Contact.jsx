import React, { useContext, useState } from "react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import { AuthContext } from "../provider/AuthProvider";

const Contact = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    console.log(userMessage);
    e.target.reset();
  };
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 p-6 rounded-md">
          <div className="w-full md:w-1/2 p-6">
            <SectionTitle sectionName={"Get in Touch"}></SectionTitle>
            <p className="text-zinc-50 mt-2">
              Feel free to reach out to me for any project or collaboration.
            </p>
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
