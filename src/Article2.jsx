import { MenuIcon } from "lucide-react";
import React from "react";

export default function Article2() {
  // const [showMenu, setShowMenu] = useState(false); // Odkomentuj dla funkcjonalności SideMenu

  // Dane dla nowego artykułu "Hydration Hacks..."
  const articleContent = {
    title: "Hydration Hacks: How to Drink More Water Without Trying",
    paragraphs: [
      "Staying hydrated is one of the easiest and most important ways to support your overall health—yet many of us still don’t drink enough water each day. The good news? There are simple tricks to help you stay hydrated without feeling like it’s a chore.",
      "Start your day with a glass of water. Before coffee or breakfast, hydrate your body after a night’s rest. This easy habit sets the tone for the day.",
      "Next, carry a reusable water bottle with you everywhere. Having it in sight is a constant reminder to sip. Bonus points if it’s one you love—fun bottles make the habit more enjoyable.",
      "Flavored water can also help. Add slices of cucumber, lemon, berries, or mint to make plain water more exciting. If you struggle with volume, try setting small goals—like drinking a glass before each meal.",
      "Eating water-rich foods like watermelon, cucumber, or oranges also counts toward your daily intake. Even soups and smoothies can boost hydration.",
      "Staying hydrated doesn’t mean constant chugging. With a few of these small changes, you’ll naturally drink more water—and your skin, energy, and focus will reap the benefits.",
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
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-[64px] text-center tracking-[0] leading-tight font-['Roboto-ExtraBold',Helvetica] mb-10 sm:mb-12">
            Article {/* Ogólny tytuł strony, można zmienić */}
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