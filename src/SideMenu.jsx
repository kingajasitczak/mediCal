import React from "react";
import { Link } from "react-router-dom"; // Zaimportuj Link

export const SideMenu = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-[280px] h-full bg-[#002c42] text-white shadow-lg z-50 p-6">
      <div className="flex justify-end mb-6">
        <button onClick={onClose} className="text-white text-2xl font-bold">×</button>
      </div>

      <Link
        to="/profile" // Ścieżka zdefiniowana w App.jsx
        onClick={onClose} // Opcjonalnie: zamknij menu po kliknięciu
        className="mb-6 flex items-center gap-2 cursor-pointer hover:opacity-80"
      >
        <div className="w-3 h-3 rounded-full bg-white" />
        <span className="text-lg font-medium">Your Profile</span>
      </Link>

      {/* NOWY LINK DO REKOMENDACJI */}
      <Link
        to="/recc" // Ścieżka do rekomendacji
        onClick={onClose}
        className="mb-6 flex items-center gap-2 cursor-pointer hover:opacity-80"
      >
        <div className="w-3 h-3 rounded-full bg-white" />
        <span className="text-lg font-medium">Recommendations</span>
      </Link>

      <Link
        to="/about-us" // Ścieżka zdefiniowana w App.jsx
        onClick={onClose} // Opcjonalnie: zamknij menu po kliknięciu
        className="mb-6 flex items-center gap-2 cursor-pointer hover:opacity-80"
      >
         <div className="w-3 h-3 rounded-full bg-white" />
        <span className="text-lg font-medium">About Us</span>
      </Link>
      
      <Link
        to="/articles" // Ścieżka zdefiniowana w App.jsx
        onClick={onClose} // Opcjonalnie: zamknij menu po kliknięciu
        className="mb-6 flex items-center gap-2 cursor-pointer hover:opacity-80"
      >
         <div className="w-3 h-3 rounded-full bg-white" />
        <span className="text-lg font-medium">Articles</span>
      </Link>
    </div>
  );
};
