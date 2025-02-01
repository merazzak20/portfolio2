import React from "react";

const SectionTitle = ({ sectionName }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold relative bg-gradient-to-r from-zinc-50 to-zinc-600 bg-clip-text text-transparent inline-block after:content-[''] after:block after:h-[2px] after:w-14 after:bg-[#afd138] after:mt-1">
        {sectionName}
      </h2>
    </div>
  );
};

export default SectionTitle;
