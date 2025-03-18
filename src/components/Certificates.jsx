import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    id: 1,
    title: "Web Development Certificate",
    image:
      "https://marketplace.canva.com/EAFy42rCTA0/1/0/1600w/canva-blue-minimalist-certificate-of-achievement-_asVJz8YgJE.jpg", // Replace with actual certificate image URL
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "React Advanced Certification",
    image: "https://via.placeholder.com/300",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <div className="">
          <div className="my-5">
            <SectionTitle
              sectionName={"Professional Certificates & License"}
            ></SectionTitle>
          </div>

          <Slider {...settings}>
            {certificates.map((certificate) => (
              <div className="px-2" key={certificate.id}>
                <div className="card card-compact bg-zinc-900 shadow-xl border border-zinc-50/10 group p-2">
                  <figure className="overflow-hidden ">
                    <img
                      className=" group-hover:scale-110 transition rounded-md"
                      src={certificate?.image}
                      alt={certificate?.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-zinc-50 font-bold">
                      {certificate?.title}
                    </h2>
                    <p>{certificate?.details?.slice(0, 110)}...</p>
                  </div>
                </div>
              </div>
              //   <div
              //     key={certificate.id}
              //     className="border rounded-lg shadow-md p-2 mx-2 cursor-pointer hover:shadow-lg transition"
              //     // onClick={() => setSelectedCertificate(certificate)}
              //   >
              //     <img
              //       src={certificate.image}
              //       alt={certificate.title}
              //       className="w-full h-48 object-cover rounded-md"
              //     />
              //     <h3 className="text-lg font-semibold mt-3">
              //       {certificate.title}
              //     </h3>
              //     <h4 className="text-md font-semibold text-zinc-400">
              //       platform
              //     </h4>
              //   </div>
            ))}
          </Slider>

          {/* Modal for Certificate Preview */}
          {/* {selectedCertificate && (
            <Dialog
              open={!!selectedCertificate}
              onClose={() => setSelectedCertificate(null)}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedCertificate.title}
                </h2>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </Dialog>
          )} */}
        </div>
      </Container>
    </div>
  );
};

export default Certificates;
