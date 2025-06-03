import { Menu } from "lucide-react";
import React from "react"; // Możesz potrzebować useState, jeśli przycisk Menu będzie coś otwierał

export default function AboutUs() {
  // const [showMenu, setShowMenu] = useState(false); // Odkomentuj, jeśli implementujesz SideMenu

  return (
    <div className="flex justify-center w-full">
      <div className="w-full min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        
        {/* Logo - spójne z poprzednimi stronami */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <img
            src="/MediCal.png" // Używam /MediCal.png jak poprzednio
            alt="MediCal Logo"
            className="w-[180px] sm:w-[200px] h-auto object-cover" // Dostosowano rozmiar dla spójności
          />
        </div>

        {/* Przycisk Menu - spójny z poprzednimi stronami */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
          <button
            type="button"
            // onClick={() => setShowMenu(true)} // Odkomentuj dla funkcjonalności SideMenu
            className="p-2 rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 sm:w-8 sm:w-8 text-white" /> {/* Rozmiar z poprzedniej strony */}
          </button>
        </div>

        {/* Główna treść strony */}
        <div className="flex flex-col items-center justify-start pt-32 sm:pt-36 px-4 w-full">
          <h1 className="font-extrabold text-white text-5xl sm:text-[64px] text-center tracking-[0] leading-tight font-['Roboto-ExtraBold',Helvetica]">
            About Us
          </h1>
          <h2 className="mt-4 font-light text-white text-2xl sm:text-4xl text-center tracking-[0] leading-normal whitespace-nowrap font-['Roboto-Light',Helvetica] mb-12 sm:mb-16">
            Find out who we are!
          </h2>

          {/* Karta "About Us" - wbudowane Card i CardContent */}
          {/* Zastosowano stylizację podobną do karty profilu dla spójności */}
          <div className="w-full max-w-3xl xl:max-w-4xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl"> {/* Poprawiono tło i responsywność */}
            <div className="p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]"> {/* Zapewnia minimalną wysokość i padding */}
              <div className="w-full max-w-2xl font-['Roboto-Regular',Helvetica] text-slate-800 text-lg sm:text-xl text-center leading-relaxed"> {/* Zmieniono czcionkę na bardziej czytelną dla dłuższego tekstu, dostosowano rozmiar */}
                Hey there! 👋<br /><br />
                We&apos;re a group of students working together on MediCal—a
                project born out of our shared interest in health, technology,
                and building something meaningful (and awesome 💪).
                <br />
                <br />
                Our team includes <span className="font-semibold">Lena Schilling</span>, <span className="font-semibold">Kinga Jasitczak</span>, <span className="font-semibold">Łukasz Skrok</span>,
                and <span className="font-semibold">Kornel Matyjaszczyk</span>. We&apos;re combining our skills in
                design, development, and way too much coffee ☕ to create a
                smooth, helpful experience for anyone who wants to stay on top
                of their health checkups.
                <br />
                <br />
                We believe that preventive care should be simple, smart, and
                tailored to you—and we&apos;re here to make that happen (with a
                few laughs along the way 😄).
                <br />
                <br />
                Thanks for being part of the journey! 💙
              </div>
            </div>
          </div>
        </div>
        <div className="pb-16"></div> {/* Dodatkowy padding na dole */}
      </div>
      {/* {showMenu && <SideMenu onClose={() => setShowMenu(false)} />} */}
    </div>
  );
}