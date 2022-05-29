import React from "react";

function User({ name, handle }) {
  return (
    <div className="user">
        <p className="name">{name}</p>
        <p className="handle">{handle}</p>
    </div>
  )
}

export default User;