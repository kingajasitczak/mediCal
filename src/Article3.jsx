import { MenuIcon } from "lucide-react";
import React from "react";

export default function Article3() {
  // const [showMenu, setShowMenu] = useState(false); // Odkomentuj dla funkcjonalności SideMenu

  // Dane dla Artykułu 2
  const articleContent = {
    title: "Why Regular Checkups Matter More Than You Think",
    paragraphs: [
      "Feeling healthy doesn’t always mean you are healthy. Many conditions like high blood pressure, diabetes, and some cancers often develop without any obvious symptoms. Regular medical checkups are essential to detect these issues early—when they’re most treatable.",
      "During a routine checkup, your doctor can monitor vital signs, run basic tests, and compare results with previous visits. These small but important actions create a health history that helps identify trends and red flags before they become serious problems.",
      "Checkups also offer a chance to discuss concerns you might overlook—like stress, sleep quality, or dietary habits. Doctors can provide guidance to improve your everyday health and prevent minor issues from escalating.",
      "Preventive screenings, tailored to your age and risk factors, are another major benefit. These tests can detect problems you didn’t even know existed, increasing the chances of successful treatment.",
      "Think of a checkup as a tune-up for your body—it keeps you running smoothly. Skipping them might save time now, but could cost much more in the future.",
      "Regular checkups don’t just catch illnesses—they promote a longer, healthier life. Prioritizing them is one of the simplest and smartest health decisions you can make.",
    ],
  };

  return (
    <main className="w-full flex flex-row justify-center">
      <div className="w-full max-w-[1440px] min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        
        {/* Logo */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <img
            src="/MediCal.png" // Zakładam ścieżkę do logo
            alt="MediCal Logo"
            className="w-[180px] sm:w-[200px] h-auto object-cover"
          />
        </div>

        {/* Przycisk Menu */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
          <button
            type="button"
            // onClick={() => setShowMenu(true)} // Dla funkcjonalności SideMenu
            className="p-2 rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Open menu"
          >
            <MenuIcon className="w-7 h-7 sm:w-8 sm:w-8 text-white" />
          </button>
        </div>

        {/* Główna treść strony - w normalnym przepływie */}
        <div className="flex flex-col items-center pt-32 sm:pt-36 px-4 w-full">
          {/* Możesz chcieć, aby ten tytuł był bardziej ogólny lub dynamiczny,
              ale na razie zostawiam "Article" dla spójności z Article1.jsx */}
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-[64px] text-center tracking-[0] leading-tight font-['Roboto-ExtraBold',Helvetica] mb-10 sm:mb-12">
            Article
          </h1>

          {/* Karta z treścią artykułu */}
          <div className="w-full max-w-3xl xl:max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <h2 className="[font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-slate-800 text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10">
              {articleContent.title}
            </h2>

            <div className="space-y-5"> {/* Używamy space-y dla odstępów między akapitami */}
              {articleContent.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="[font-family:'Roboto-Light',Helvetica] font-light text-slate-700 text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-16"></div> {/* Dodatkowy padding na dole */}
      </div>
    </main>
  );
}