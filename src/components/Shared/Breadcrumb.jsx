import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <span key={index}>
        <Link to={path}>{segment}</Link>
        {!isLast && " / "}
      </span>
    );
  });

  return (
    <div>
      {breadcrumbs.length > 0 ? (
        <div class="flex items-center justify-center space-x-4 text-sm text-gray-500  py-4 px-4">
          <Link to="/">
            <button type="button">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.333 10.17v1.267c0 3.251 0 4.876-.977 5.886-.976 1.01-2.547 1.01-5.69 1.01H8.333c-3.143 0-4.714 0-5.69-1.01-.977-1.01-.977-2.635-.977-5.886V10.17c0-1.907 0-2.86.433-3.651.432-.79 1.223-1.281 2.804-2.262l1.666-1.035C8.241 2.185 9.076 1.667 10 1.667s1.76.518 3.43 1.555l1.667 1.035c1.58.98 2.371 1.471 2.804 2.262M12.5 15h-5"
                  stroke="#afd138"
                  stroke-opacity=".8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </Link>
          <svg
            width="12"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.527 1 1.13 18.429"
              stroke="#6B7280"
              stroke-opacity=".8"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Projects</p>
          <svg
            width="12"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.527 1 1.13 18.429"
              stroke="#6B7280"
              stroke-opacity=".8"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{title}</p>
        </div>
      ) : (
        <p className="text-[#afd138]">Home</p>
      )}
    </div>
  );
};

export default Breadcrumb;
