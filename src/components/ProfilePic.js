import React from "react";

function ProfilePic({ image }) {
  return (
    <img src={image} className="profile" alt="profile" />
  )
}

export default ProfilePic;