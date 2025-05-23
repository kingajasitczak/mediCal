import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSignUp = () => {
    // You can add validation logic here later
    navigate("/survey-choice");
  };

  return (
    <div
      className="flex justify-center items-center w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(140, 217, 255, 1) 0%, rgba(0, 38, 57, 1) 50%),
          linear-gradient(to bottom left, rgba(140, 217, 255, 1) 0%, rgba(0, 38, 57, 1) 50%),
          linear-gradient(to top left, rgba(140, 217, 255, 1) 0%, rgba(0, 38, 57, 1) 50%),
          linear-gradient(to top right, rgba(140, 217, 255, 1) 0%, rgba(0, 38, 57, 1) 50%)
        `,
        backgroundPosition: "bottom right, bottom left, top left, top right",
        backgroundSize: "50% 50%",
      }}
    >
      <div className="absolute top-0 left-0">
          <img
            src="/MediCal.png"
            alt="Medical Logo"
            className="w-[239px] h-[193px] object-cover"
          />
        </div>
      <div className="w-[1070px] bg-[#ffffffe6] rounded-[50px] shadow-[0px_6px_7.5px_8px_#00000040] px-12 py-16">
        <h1 className="text-[64px] text-center font-extrabold text-[#13313f] mb-12 [font-family:'Roboto-ExtraBold',Helvetica]">
          Sign up
        </h1>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-[900px] mx-auto">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#13313f] text-2xl font-light [font-family:'Roboto-Light',Helvetica]">Your Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#13313f]" />
              <input
                type="text"
                placeholder="Type your name"
                className="pl-10 h-[72px] bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] [font-family:'Roboto-ExtraLight',Helvetica] w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#13313f] text-2xl font-light [font-family:'Roboto-Light',Helvetica]">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#13313f]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Type your password"
                className="pl-10 pr-10 h-[72px] bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] [font-family:'Roboto-ExtraLight',Helvetica] w-full"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-5 text-[#13313f]" />
                ) : (
                  <Eye className="h-4 w-5 text-[#13313f]" />
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#13313f] text-2xl font-light [font-family:'Roboto-Light',Helvetica]">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#13313f]" />
              <input
                type="email"
                placeholder="Type your email"
                className="pl-10 h-[72px] bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] [font-family:'Roboto-ExtraLight',Helvetica] w-full"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="mb-2 text-[#13313f] text-2xl font-light [font-family:'Roboto-Light',Helvetica]">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#13313f]" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Type your password"
                className="pl-10 pr-10 h-[72px] bg-white border-0 border-b border-black rounded-none text-xl font-extralight text-[#13313f] [font-family:'Roboto-ExtraLight',Helvetica] w-full"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-5 text-[#13313f]" />
                ) : (
                  <Eye className="h-4 w-5 text-[#13313f]" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSignUp}
            className="w-[212px] h-[61px] bg-[#022c42] hover:bg-[#034569] rounded-[30px] text-white text-2xl font-bold [font-family:'Roboto-Bold',Helvetica]"
          >
            SIGN UP
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-12 text-center text-2xl [font-family:'Roboto-Light',Helvetica]">
          <span className="text-[#13313f] font-light">Already have an account? </span>
          <Link to="/" className="font-medium text-[#186f9b]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
