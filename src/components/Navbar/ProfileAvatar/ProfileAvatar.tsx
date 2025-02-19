import React from "react";

const ProfileAvatar = ({ src, alt = "User Avatar", size = "w-12 h-12" }) => {
  return (
    <div className={`relative ${size}`}>
      <img
        src="./public/img/header/Profile.png"
        alt={alt}
        className="rounded-full object-cover w-full h-full border border-gray-300 shadow-sm"
      />
    </div>
  );
};

export default ProfileAvatar;
