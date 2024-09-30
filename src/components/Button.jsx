import React from "react";

export default function Button({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red text-white border-coral-red"
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
}
