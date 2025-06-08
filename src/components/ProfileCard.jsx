import React from "react";
import profileImg from "../assets/profileimg.png";

const ProfileCard = () => {
  return (
    <aside className="transition-all duration-300 w-[360px] hidden md:block fixed top-2 left-16 z-30 h-fit">
      <div className="h-full w-full bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 border border-gray-200 shadow-2xl px-6 py-10 text-center">
        <div className="w-full flex justify-center mb-6">
          <div className="w-54 h-54 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md border-4 border-white/30 bg-white">
            <img
              src={profileImg}
              alt="Swapnil Matkatte"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Swapnil Matkatte</h2>
        <p className="text-sm text-gray-600 mb-3">Full Stack Developer</p>
        <div className="text-sm space-y-1">
          <p className="font-semibold text-gray-700">Specialization:</p>
          <p className="text-gray-800">MERN Stack</p>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;