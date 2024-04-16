import React from "react";
import LoginForm from "./LoginForm";
import Imageandtext from "./Imageandtext";

export default function Signin() {
  return (
    <div className="min-h-screen flex">
      {/* login container */}
      <div className="flex flex-1">
        {/* form */}
        <LoginForm />
        <Imageandtext />
      </div>
    </div>
  );
}
