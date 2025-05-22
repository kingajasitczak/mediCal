import React from "react";
import { Link } from "react-router-dom";
import { Eye, Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-full max-w-[1440px] h-screen relative bg-white [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        {/* Medical Logo */}
        <div className="absolute top-0 left-0">
          <img
            src=""
            alt="Medical Logo"
            className="w-[239px] h-[193px] object-cover"
          />
        </div>

        {/* Login Card */}
        <div className="absolute w-[625px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-[50px] shadow-[0px_6px_7.5px_8px_#00000040] bg-[#ffffffe6] p-12">
            <h1 className="text-center text-[64px] font-extrabold text-[#13313f] mb-12">
              Login
            </h1>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-2xl font-light text-[#13313f] mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="h-4 w-4 text-[#13313f]" />
                </div>
                <input
                  type="email"
                  placeholder="Type your email"
                  className="pl-10 h-[72px] w-full bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-2">
              <label className="block text-2xl font-light text-[#13313f] mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className="h-4 w-4 text-[#13313f]" />
                </div>
                <input
                  type="password"
                  placeholder="Type your password"
                  className="pl-10 h-[72px] w-full bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <Eye className="h-5 w-5 text-[#13313f]" />
                </div>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-xl font-light text-[#13313f]"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <div className="flex justify-center mb-8">
              <button className="w-[212px] h-[61px] bg-[#022c42] hover:bg-[#033e5d] rounded-[30px] text-white text-2xl font-bold transition">
                LOGIN
              </button>
            </div>

            {/* Sign Up Link */}
<div className="text-center text-2xl">
  <span className="font-light text-[#13313f]">
    Don&apos;t have an account?{" "}
  </span>
  <Link
    to="/signup"
    className="font-medium text-[#186f9b]"
  >
    Sign up
  </Link>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
