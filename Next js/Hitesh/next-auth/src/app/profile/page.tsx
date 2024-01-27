"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfilePage() {
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
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      ProfilePage this
      <button onClick={handleLogout} className="bg-[tomato] py-2 px-6 rounded">Logout</button>
    </div>
  );
}
