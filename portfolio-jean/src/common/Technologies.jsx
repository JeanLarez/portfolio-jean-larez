import React from "react";

const Technologies = (data) => {
  return (
    <span className="whitespace-nowrap rounded-full bg-purple-100 border-2 border-purple-600 px-2.5 py-0.5 text-xs text-purple-600">
      {data.technologies}
    </span>
  );
};

export default Technologies;
