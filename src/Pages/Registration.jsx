import React, { useState } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Registration = () => {
  const [passtoggle,setpasstoggle]= useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
        <form className="flex flex-col gap-3">
          <Input label="Full Name" placeholder="Enter Your Full Name" />
          <Input label="Email" placeholder="Enter Your Email" type="email" />
          <div className="relative">
            <Input
              label="Password"
              placeholder="Enter Your password"
              type={passtoggle?"text":"password"}
            />
            {passtoggle ? (
              <LuEye
                onClick={()=>setpasstoggle(!passtoggle)}
                className="absolute right-2 top-9 cursor-pointer"
              />
            ) : (
              <LuEyeOff
                onClick={()=>setpasstoggle(!passtoggle)}
                 className="absolute right-2 top-9 cursor-pointer"
              />
            )}
          </div>
          <p className="text-gray-900 mt-4">
            {" "}
            Already have an Account ?{" "}
            <Link
              to="/login"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
            >
              Sign In
            </Link>
          </p>

          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
