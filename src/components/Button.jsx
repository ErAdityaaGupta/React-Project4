import React from 'react'

export default function Button({ label, iconUrl }) {
  return (
    <button className="bg-coral-red  py-4 rounded-3xl text-white flex justify-center items-center gap-2 px-7 font-montserrat leading-none ">
      {label}
      { iconUrl&& <img src={iconUrl} alt='arrow right icon' className='ml-2 rounded-full h-5 w-5' />}
    </button>
  );
}
