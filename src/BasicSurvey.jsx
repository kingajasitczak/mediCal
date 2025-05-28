import React from "react";
import { useNavigate } from "react-router-dom"; // <== dodane
import { Activity } from "lucide-react";

export default function BasicSurvey() {
  const navigate = useNavigate();
  const questions = [
    {
      id: "gender",
      title: "Please specify your gender:",
      options: ["Male", "Female"],
    },
    {
      id: "age",
      title: "How old are you?",
    },
    {
      id: "active",
      title: "Are you physically active (≥3 times a week)?",
      options: ["Yes", "No"],
      icon: true,
    },
    {
      id: "smoke",
      title: "Do you smoke cigarettes or e-cigarettes?",
      options: ["Yes", "No"],
    },
    {
      id: "height",
      title: "How tall are you? (cm)",
    },
    {
      id: "weight",
      title: "Please specify your weight (kg):",
    },
  ];

  const handleFinish = () => {
    navigate("/calendar"); };

  return (
    <div className="flex justify-center w-full min-h-screen bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(140,217,255,1) 0%, rgba(0,38,57,1) 50%),
          linear-gradient(to bottom left, rgba(140,217,255,1) 0%, rgba(0,38,57,1) 50%),
          linear-gradient(to top left, rgba(140,217,255,1) 0%, rgba(0,38,57,1) 50%),
          linear-gradient(to top right, rgba(140,217,255,1) 0%, rgba(0,38,57,1) 50%)
        `,
        backgroundPosition: "bottom right, bottom left, top left, top right",
        backgroundSize: "50% 50%",
      }}
    >
      <div className="w-full max-w-[710px] py-20 px-8">
        <img src="/MediCal.png" alt="Medical Logo" className="w-[239px] h-[193px] object-cover mb-6 block mx-auto" />

        <h1 className="text-white text-[64px] font-extrabold text-center mb-16">Basic Survey</h1>

        {/* Gender */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[0].title}</h2>
          <div className="space-y-4 ml-4">
            {questions[0].options.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <input type="radio" id={option} name="gender" value={option} />
                <label htmlFor={option} className="text-xl font-medium text-[#13313f]">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[1].title}</h2>
          <select className="border-2 border-[#186f9b] rounded px-4 py-2 ml-4">
            <option>Select</option>
            {[...Array(100)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Activity */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8 relative">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[2].title}</h2>
          <div className="space-y-4 ml-4">
            {questions[2].options.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <input type="radio" id={option} name="active" value={option} />
                <label htmlFor={option} className="text-xl font-medium text-[#13313f]">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <Activity className="absolute top-4 right-6 w-12 h-12 text-[#13313f]" />
        </div>

        {/* Smoke */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[3].title}</h2>
          <div className="space-y-4 ml-4">
            {questions[3].options.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <input type="radio" id={option} name="smoke" value={option} />
                <label htmlFor={option} className="text-xl font-medium text-[#13313f]">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Height */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[4].title}</h2>
          <select className="border-2 border-[#186f9b] rounded px-4 py-2 ml-4">
            {[...Array(121)].map((_, i) => (
              <option key={i}>{140 + i}</option>
            ))}
          </select>
        </div>

        {/* Weight */}
        <div className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8">
          <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">{questions[5].title}</h2>
          <select className="border-2 border-[#186f9b] rounded px-4 py-2 ml-4">
            {[...Array(121)].map((_, i) => (
              <option key={i}>{40 + i}</option>
            ))}
          </select>
        </div>

        {/* Finish Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleFinish}
            className="px-8 py-3 bg-white text-[#13313f] text-[32px] font-extrabold rounded-[20px] shadow-lg hover:opacity-90 transition"
          >
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
}
