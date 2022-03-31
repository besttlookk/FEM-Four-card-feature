import React from "react";

const Card = ({ label, content, children, borderClass }) => {
  return (
    <div
      className={`p-6 mx-auto  bg-white w-full border-t-4 rounded-lg shadow-xl ${borderClass} h-60 `}
    >
      <h3 className="text-lg font-semibold text-neutral-dark-blue">{label}</h3>
      <p className="w-64 mt-3 text-sm text-neutral-grayish-blue">{content}</p>
      <div className="flex justify-end mt-10">{children}</div>
    </div>
  );
};

export default Card;
