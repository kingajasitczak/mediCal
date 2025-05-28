import React from "react";
import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function ExtendedSurvey() {
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
    {
      id: "alcohol",
      title: "Do you consume alcohol?",
      options: ["Yes", "No"],
    },
    {
      id: "conditions",
      title: "Do you have any chronic health conditions?",
      options: ["Yes", "No"],
    },
    {
      id: "family",
      title: "Does anyone in your family have a history of serious illness?",
      options: ["Yes", "No"],
    },
    {
      id: "symptoms",
      title: "Have you experienced any unusual symptoms recently?",
      options: ["Yes", "No"],
    },
    ];

    const handleFinish = () => {
    navigate("/calendar");
    };

  

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

        <h1 className="text-white text-[64px] font-extrabold text-center mb-16">Extended Survey</h1>

        {questions.map((q, idx) => (
          <div
            key={q.id}
            className="bg-white/90 shadow-xl rounded-[50px] p-8 mb-8 relative"
          >
            <h2 className="text-[32px] font-extrabold text-[#13313f] mb-6">
              {q.title}
            </h2>

            {q.options ? (
              <div className="space-y-4 ml-4">
                {q.options.map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <input type="radio" id={`${q.id}_${option}`} name={q.id} value={option} />
                    <label htmlFor={`${q.id}_${option}`} className="text-xl font-medium text-[#13313f]">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <select className="border-2 border-[#186f9b] rounded px-4 py-2 ml-4">
                <option>Select</option>
                {[...Array(q.id === "height" ? 121 : q.id === "weight" ? 121 : 100)].map((_, i) => (
                  <option key={i}>
                    {q.id === "height"
                      ? 140 + i
                      : q.id === "weight"
                      ? 40 + i
                      : i + 1}
                  </option>
                ))}
              </select>
            )}

            {q.icon && <Activity className="absolute top-4 right-6 w-12 h-12 text-[#13313f]" />}
          </div>
        ))}

        {/* Finish Button */}
        <div className="flex justify-center mt-8">
          <button onClick={handleFinish} className="px-8 py-3 bg-white text-[#13313f] text-[32px] font-extrabold rounded-[20px] shadow-lg hover:opacity-90 transition">
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
}
