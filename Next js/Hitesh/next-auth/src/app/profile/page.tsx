"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState("");
  const route = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log(response);
      route.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // get profile data
  const getData = async () => {
    let res = await axios.get("/api/users/user");
    setUser(res.data);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      ProfilePage
      {JSON.stringify(user)}
      <button onClick={handleLogout} className="bg-[tomato] py-2 px-6 rounded">
        Logout
      </button>
      <button onClick={getData} className="bg-[tomato] py-2 px-6 rounded">
        Get User details
      </button>
    </div>
  );
}
