import React, { useState } from "react";

// Definiujemy dane badań poza komponentem dla lepszej organizacji
const testsData = [
  {
    id: "cbc",
    name: "CBC (Morfologia krwi obwodowej)",
    description: "Podstawowe badanie, które ocenia ogólny stan zdrowia i pozwala wykryć m.in. anemię czy infekcje.",
  },
  {
    id: "tsh",
    name: "TSH (Hormon tyreotropowy)",
    description: "Kluczowe badanie w diagnostyce chorób tarczycy, takich jak nadczynność lub niedoczynność.",
  },
  {
    id: "lipid",
    name: "Lipidogram (Profil lipidowy)",
    description: "Pomaga ocenić ryzyko chorób sercowo-naczyniowych poprzez pomiar poziomu cholesterolu i trójglicerydów.",
  },
];

export const Kalendarz = ({ onClose }) => {
  // Inicjalizujemy stan dla ptaszków. Każde badanie ma status `false` (niezaznaczone).
  const [checkedTests, setCheckedTests] = useState({
    cbc: false,
    tsh: false,
    lipid: false,
  });

  // Funkcja do przełączania stanu zaznaczenia
  const handleToggleCheck = (testId) => {
    setCheckedTests((prev) => ({
      ...prev,
      [testId]: !prev[testId],
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#002b45] text-white flex flex-col items-center justify-start p-10">
      {/* Pasek do zamykania (klikalny) */}
      <div
        onClick={onClose}
        className="w-16 h-2 bg-white rounded-full cursor-pointer mb-6"
        title="Click to close"
      />

      {/* Nagłówek */}
      <h2 className="text-3xl font-bold mb-2">May 19 – Monday</h2>
      <p className="text-lg mb-8 text-gray-300">Scheduled Medical Tests</p>

      {/* Lista badań */}
      <div className="bg-white text-[#002b45] rounded-2xl px-6 py-4 w-full max-w-md space-y-4">
        {/* Mapujemy dane badań, aby dynamicznie tworzyć listę */}
        {testsData.map((test) => (
          <div
            key={test.id}
            className="bg-[#dee3ea] rounded-xl p-4 flex items-center justify-between"
          >
            {/* Kontener na tekst (nazwa + opis) */}
            <div className="flex-grow pr-4">
              <h3 className="font-semibold text-base">{test.name}</h3>
              <p className="text-sm text-gray-600">{test.description}</p>
            </div>

            {/* Przycisk do zaznaczania (ptaszek) */}
            <button
              onClick={() => handleToggleCheck(test.id)}
              className={`w-8 h-8 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                checkedTests[test.id]
                  ? "bg-green-500 border-green-500"
                  : "bg-transparent border-gray-400"
              }`}
              aria-label={`Mark ${test.name} as done`}
            >
              {/* Ikona ptaszka (widoczna tylko po zaznaczeniu) */}
              {checkedTests[test.id] && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};