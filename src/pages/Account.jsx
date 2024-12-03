import React, { useState } from "react";
import { assets } from "../assets/assets";

const Account = () => {
  const [userData, setUserData] = useState({
    name: "Kiril Kirilov",
    image: assets.profile_pic,
    email: "kircho1@gmail.com",
    phone: "+359 882 3456",
    adress: {
      lin1: "Aleksandar Makedonski Str, 57",
      line2: "Plovdiv, Bulgaria",
    },
    gender: "Male",
    dob: "1998-01-20",
  });

  const [isEdited, setIsEdited] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />

      {isEdited ? <input type="text" /> : <p>{userData.name}</p>}
    </div>
  );
};

export default Account;
