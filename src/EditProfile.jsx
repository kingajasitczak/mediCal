import { Mail, Menu, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Krok 1: Import useNavigate

export default function EditProfile() {
  const navigate = useNavigate(); // Krok 2: Inicjalizacja hooka

  const formFields = [
    {
      id: "name",
      label: "Your name",
      type: "text",
      icon: <User className="h-5 w-5 text-gray-500" />,
      value: "Your name",
    },
  ];

  // Krok 3: Funkcja do obsługi przejścia do ankiet
  const handleSurveyClick = () => {
    navigate("/survey-choice");
  };

  // Krok 4 (Opcjonalnie): Funkcja do obsługi anulowania edycji
  const handleCancelClick = () => {
    navigate(-1); // Wróć do poprzedniej strony
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <img
            src="/MediCal.png"
            alt="MediCal Logo"
            className="w-[180px] sm:w-[200px] h-auto"
          />
        </div>

        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
          <button
            type="button"
            className="p-2 rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-start pt-32 sm:pt-36 px-4 w-full">
          <h1 className="text-white text-5xl sm:text-[64px] [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-center leading-tight">
            Edit your profile
          </h1>
          <p className="[font-family:'Roboto-Light',Helvetica] font-light text-white text-2xl sm:text-4xl text-center mt-4 mb-12 sm:mb-16">
            Change your information here
          </p>

          <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-xl shadow-2xl">
            <div className="p-6 sm:p-8">
              {formFields.map((field) => (
                <div key={field.id} className="mb-6 last:mb-0">
                  <label
                    htmlFor={field.id}
                    className="block [font-family:'Roboto-Medium',Helvetica] font-semibold text-slate-700 text-lg mb-2"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {field.icon}
                    </div>
                    <input
                      id={field.id}
                      type={field.type}
                      defaultValue={field.value}
                      className="h-[52px] w-full bg-slate-50/70 border border-slate-300 text-slate-800 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* "Click here to re-do the survey!" button */}
          <div className="mt-8 mb-8">
            <button
              type="button"
              onClick={handleSurveyClick} // Krok 5: Dodanie onClick
              className="bg-transparent text-white font-bold py-3 px-8 rounded-full text-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              Click here to re-do the survey!
            </button>
          </div>

          {/* Cancel and Save buttons */}
          <div className="flex justify-center space-x-6 mb-12 sm:mb-16">
            <button
              type="button"
              onClick={handleCancelClick} // Krok 5: Dodanie onClick
              className="bg-gray-200 text-black font-bold py-3 px-10 rounded-full text-xl shadow-lg hover:bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/75"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-200 text-black font-bold py-3 px-10 rounded-full text-xl shadow-lg hover:bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/75"
            >
              Save
            </button>
          </div>
        </div>
        <div className="pb-16"></div>
      </div>
    </div>
  );
}