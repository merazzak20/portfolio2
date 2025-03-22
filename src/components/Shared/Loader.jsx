import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <InfinitySpin
        visible={true}
        width="200"
        color="#B6DF46"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
