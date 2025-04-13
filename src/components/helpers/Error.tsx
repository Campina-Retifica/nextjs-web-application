import React from "react";

const Error = ({ error }: { error?: string }) => {
  if (error)
    return (
      <p className="text-red-600/50 text-xs md:text:sm lg:text-[1rem] mb-1">
        {error}
      </p>
    );
  return (
    <p className="text-transparent text-xs md:text:sm lg:text-[1rem] mb-1">
      This space is dedicated to a possible error
    </p>
  );
};

export default Error;
