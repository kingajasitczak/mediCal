import React from "react";
import { useNavigate } from "react-router-dom";

// KROK 1: Zastępujemy import ikon z zewnętrznej biblioteki
// tworząc je jako proste komponenty bezpośrednio w tym pliku.

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor" // Zmienione na fill, żeby gwiazdka była cała wypełniona kolorem
    stroke="currentColor"
    strokeWidth="1" // Cienka ramka dla lepszego wyglądu
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


// Dane nagród - bez zmian
const rewardsData = [
  {
    id: "gym_discount",
    name: "15% discount on a gym membership",
    cost: 500,
    imageUrl: "/gym.png",
  },
  {
    id: "logo_hat",
    name: "Branded MediCal Cap",
    cost: 800,
    imageUrl: "/cap.png",
  },
  {
    id: "water_bottle",
    name: "Reusable Water Bottle",
    cost: 350,
    imageUrl: "/bottle.png",
  },
  {
    id: "free_consultation",
    name: "Free dietary consultation",
    cost: 1200,
    imageUrl: "/diet.png",
  },
];

export default function Rewards() {
  const navigate = useNavigate();
  const userPoints = 400;

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
            {/* KROK 2: Używamy naszego lokalnego komponentu ikony */}
            <MenuIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-start pt-32 sm:pt-36 px-4 w-full">
          
          <div className="text-center mb-8">
            <p className="[font-family:'Roboto-Light',Helvetica] font-light text-white text-2xl sm:text-3xl">
              Your Points
            </p>
            <p className="text-white text-7xl sm:text-8xl [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold tracking-tighter">
              {userPoints}
            </p>
          </div>

          <h1 className="text-white text-5xl sm:text-[64px] [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-center leading-tight">
            Rewards & Accolades
          </h1>
          <p className="[font-family:'Roboto-Light',Helvetica] font-light text-white text-2xl sm:text-4xl text-center mt-4 mb-12 sm:mb-16">
            Redeem your points for amazing rewards!
          </p>

          <div className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {rewardsData.map((reward) => (
              <div
                key={reward.id}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden group transition-all hover:shadow-cyan-400/30 hover:-translate-y-2"
              >
                <img
                  src={reward.imageUrl}
                  alt={reward.name}
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-slate-800 text-base leading-tight">
                    {reward.name}
                  </h3>
                  <div className="flex items-center justify-center mt-3 bg-slate-100/70 rounded-full px-3 py-1">
                    {/* KROK 3: Używamy naszego lokalnego komponentu ikony */}
                    <StarIcon className="h-5 w-5 text-amber-500" />
                    <span className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-slate-700 text-md ml-1.5">
                      {reward.cost} pts
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pb-16"></div>
        </div>
      </div>
    </div>
  );
}