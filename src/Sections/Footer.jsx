import React from "react";
import { headerLogo } from "../assets/images";
import { socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" >
            <img src={headerLogo} width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
