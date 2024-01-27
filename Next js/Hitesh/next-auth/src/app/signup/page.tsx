"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function SignUpPage() {
  // const route = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios
        .post("/api/users/signup", user)
        .then((res) => console.log(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className=" flex flex-col  items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <br />
      <div className="text-start flex flex-col">
        <label htmlFor="username" className="text-start">
          User Name
        </label>
        <input
          className=" bg-white py-3 px-8 rounded-md border border-gray-200 outline-none hover:border-blue-400"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder=" enter user name"
        />
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
      </div>
    </div>
  );
}
