import { MenuIcon } from "lucide-react"; // Zgodnie z Twoim importem
import React from "react";


// Zmieniam nazwę komponentu dla lepszej semantyki
export default function Article1() {
  // const [showMenu, setShowMenu] = useState(false); // Odkomentuj dla funkcjonalności SideMenu

  // Dane artykułu
  const articleContent = {
    title: "5 Easy Habits for a Healthier Everyday Life",
    introduction:
      "Living a healthier life doesn't always require big, drastic changes. Sometimes, it's the small, consistent habits that make the biggest impact. Here are five easy ways to boost your health daily—no gym membership or complicated routines required.",
    habits: [
      {
        number: 1,
        title: "Stay Hydrated:",
        description:
          "Start your day with a glass of water and keep a reusable bottle nearby. Hydration supports digestion, energy levels, and even your skin.",
      },
      {
        number: 2,
        title: "Take Movement Breaks:",
        description:
          "Whether you're at a desk or on the go, aim to stretch or walk for a few minutes every hour. These small breaks improve circulation and reduce tension.",
      },
      {
        number: 3,
        title: "Eat More Whole Foods:",
        description:
          "Swap processed snacks for fruits, nuts, or yogurt. Whole foods are packed with nutrients and keep you full longer.",
      },
      {
        number: 4,
        title: "Get Enough Sleep:",
        description:
          "Aim for 7–9 hours of quality sleep. A regular sleep schedule helps regulate mood, memory, and overall health.",
      },
      {
        number: 5,
        title: "Practice Mindfulness:",
        description:
          "Even just five minutes of breathing exercises or quiet reflection can reduce stress and improve focus.",
      },
    ],
    conclusion:
      "You don't need a full lifestyle overhaul to feel better. Start with these manageable steps, and over time, they'll become second nature—making a big difference in your everyday well-being.",
  };

  return (
    <main className="w-full flex flex-row justify-center"> {/* Outermost container to center content */}
      <div className="w-full max-w-[1440px] min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        
        {/* Logo */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <img
            src="/MediCal.png" // Zakładam ścieżkę do logo
            alt="MediCal Logo"
            className="w-[180px] sm:w-[200px] h-auto object-cover"
          />
        </div>

        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
        <button
          type="button"
          // onClick={() => setShowMenu(true)}
          className="p-2 rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Open menu"
        >
          <MenuIcon className="w-7 h-7 sm:w-8 sm:w-8 text-white" />
        </button>
        </div>

        {/* Główna treść strony - w normalnym przepływie */}
        <div className="flex flex-col items-center pt-32 sm:pt-36 px-4 w-full">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-[64px] text-center tracking-[0] leading-tight font-['Roboto-ExtraBold',Helvetica] mb-10 sm:mb-12">
            Article
          </h1>

          {/* Karta z treścią artykułu */}
          <div className="w-full max-w-3xl xl:max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <h2 className="[font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-slate-800 text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10">
              {articleContent.title}
            </h2>

            <p className="[font-family:'Roboto-Light',Helvetica] font-light text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              {articleContent.introduction}
            </p>

            <div className="space-y-6 mb-8">
              {articleContent.habits.map((habit) => (
                <div key={habit.number}>
                  <h3 className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-slate-700 text-lg sm:text-xl mb-2">
                    {habit.number}. {habit.title}
                  </h3>
                  <p className="[font-family:'Roboto-Light',Helvetica] font-light text-slate-600 text-base sm:text-lg leading-relaxed ml-0 sm:ml-4"> {/* Usunięto stałe wcięcie dla lepszej responsywności, można dodać padding-left jeśli trzeba */}
                    {habit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-300 pt-8 mt-8">
              <p className="[font-family:'Roboto-Light',Helvetica] font-light text-slate-700 text-base sm:text-lg leading-relaxed">
                {articleContent.conclusion}
              </p>
            </div>
          </div>
        </div>
        <div className="pb-16"></div> {/* Dodatkowy padding na dole */}
      </div>
    </main>
  );
}