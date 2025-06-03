import { MenuIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Dane artykułów - już zaktualizowane o path dla article ID 2
const articlesData = [
  {
    id: 1,
    title: "5 Easy Habits for a Healthier Everyday Life",
    path: "/article1", 
  },
  {
    id: 2,
    title: "Hydration Hacks: How to Drink More Water Without Trying",
  },
  {
    id: 3,
    title: "Why Regular Checkups Matter More Than You Think",
    path: "/article3",
    // Brak 'path', więc będzie przyciskiem
  },
  {
    id: 4,
    title: "What Your Blood Pressure Is Trying to Tell You",
  },
  {
    id: 5,
    title: "The Truth About Screen Time and Your Sleep",
  },
  {
    id: 6,
    title: "Mental Health Myths You Should Stop Believing Today",
  },
];

export default function Articles() {
  // const [showMenu, setShowMenu] = useState(false); 

  const handleOtherArticleClick = (articleId) => {
    console.log("Clicked article (button fallback) ID:", articleId);
    // Docelowo możesz chcieć nawigować nawet jeśli nie ma 'path', np. do strony "w budowie"
  };

  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
      
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
        <img
          src="/MediCal.png"
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

      <div className="flex flex-col items-center pt-32 sm:pt-36 px-4 w-full">
        <h1 className="font-extrabold text-white text-5xl sm:text-[64px] text-center tracking-[0] leading-tight font-['Roboto-ExtraBold',Helvetica]">
          Articles
        </h1>
        <h2 className="mt-4 font-light text-white text-2xl sm:text-4xl text-center tracking-[0] leading-normal whitespace-nowrap font-['Roboto-Light',Helvetica] mb-12 sm:mb-16">
          Find out some interesting facts about health and nutrition!
        </h2>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {articlesData.map((article) => {
            // Sprawdzamy, czy artykuł ma zdefiniowaną właściwość 'path'
            if (article.path) { // ✨ ZMIANA LOGIKI TUTAJ
              return (
                <Link
                  key={article.id}
                  to={article.path} // Nawigacja do ścieżki zdefiniowanej w article.path
                  className="block bg-white rounded-xl shadow-lg p-6 text-center min-h-[160px] h-full flex flex-col items-center justify-center group hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 ease-in-out"
                >
                  <h3 className="font-['Roboto-Medium',Helvetica] font-semibold text-slate-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
              );
            } else {
              // Dla artykułów bez zdefiniowanej ścieżki 'path' zostaje przycisk
              return (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => handleOtherArticleClick(article.id)}
                  className="bg-white rounded-xl shadow-lg p-6 text-center min-h-[160px] h-full flex flex-col items-center justify-center group hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 ease-in-out"
                >
                  <h3 className="font-['Roboto-Medium',Helvetica] font-semibold text-slate-800 text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="pb-16"></div>
    </div>
  );
}