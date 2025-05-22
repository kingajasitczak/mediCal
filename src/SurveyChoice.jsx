import React from "react";
import { useNavigate } from "react-router-dom";

export default function SurveyChoice() {
  const navigate = useNavigate();

  const surveyOptions = [
    {
      title: "Basic Survey",
      description:
        "A short (six questions) survey to help us determine your medical checkup schedule based on general guidelines.",
      path: "/basic-survey",
    },
    {
      title: "Extended Survey",
      description:
        "Extended version of the survey (eleven questions) to help us prepare a personalized medical checkup schedule for you.",
      path: "/extended-survey",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1440px] h-[1024px] relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        
        {/* Logo */}
        <img
          className="absolute w-[239px] h-[193px] top-0 left-0 object-cover"
          alt="Medical"
          src=""
        />

        {/* Welcome text */}
        <div className="absolute top-[166px] left-0 right-0 mx-auto text-center">
          <h1 className="[font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-white text-8xl tracking-[0] leading-[normal]">
            Welcome!
          </h1>
          <p className="mt-12 [font-family:'Roboto-Light',Helvetica] font-light text-white text-4xl tracking-[0] leading-[normal]">
            Please choose one of the options below to proceed
          </p>
        </div>

        {/* Survey options */}
        <div className="absolute top-[436px] left-0 right-0 flex justify-center gap-10 px-4">
          {surveyOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => navigate(option.path)}
              className="w-[530px] h-[311px] bg-[#ffffffe6] rounded-[50px] shadow-[0px_6px_7.5px_8px_#00000040] border-none cursor-pointer hover:shadow-[0px_8px_10px_10px_#00000040] transition-shadow flex flex-col items-center justify-center text-center"
            >
              <h2 className="[font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-[#13313f] text-5xl tracking-[0] leading-[normal]">
                {option.title}
              </h2>
              <p className="mt-16 px-10 [font-family:'Roboto-Light',Helvetica] font-light text-[#13313f] text-[32px] tracking-[0] leading-[normal]">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
