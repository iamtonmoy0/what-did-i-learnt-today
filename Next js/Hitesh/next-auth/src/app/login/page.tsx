"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSignup = async () => {};
  return (
    <div className=" flex flex-col  items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl underline">Login</h1>
      <br />
      <div className="text-start flex flex-col">
        {/* email */}
        <label htmlFor="email" className="text-start">
          Email
        </label>
        <input
          className=" bg-white py-3 px-8 rounded-md border border-gray-200 outline-none hover:border-blue-400"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder=" enter your email"
        />
        {/* password */}
        <label htmlFor="password" className="text-start">
          Password
        </label>
        <input
          className=" bg-white py-3 px-8 rounded-md border border-gray-200 outline-none hover:border-blue-400"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder=" enter password"
        />

        <button
          onClick={onSignup}
          type="button"
          className="py-2 px-4 bg-slate-400 focus:bg-blue-300"
        >
          Signup here
        </button>
        <Link href="/signup" >Signup</Link>
      </div>
    </div>
  );
}
