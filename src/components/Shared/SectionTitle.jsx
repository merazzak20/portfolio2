import React from "react";

const SectionTitle = ({ sectionName }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-[#afd138] after:mt-2 after:mx-auto">
        {sectionName}
      </h2>
    </div>
  );
};

export default SectionTitle;
