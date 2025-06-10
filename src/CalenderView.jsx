import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Menu,
  Search, // 1. Import ikony Search
} from "lucide-react";
import { Kalendarz } from "./Kalendarz";
import { SideMenu } from "./SideMenu";

export default function CalenderView() {
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const calendarData = [
    [
      { day: 28, dayName: "Monday", isOutsideMonth: true },
      { day: 29, dayName: "Tuesday", isOutsideMonth: true },
      { day: 30, dayName: "Wednesday", isOutsideMonth: true },
      { day: 1, dayName: "Thursday" },
      { day: 2, dayName: "Friday" },
      { day: 3, dayName: "Saturday" },
      { day: 4, dayName: "Sunday" },
    ],
    [
      { day: 5, dayName: "Monday" },
      { day: 6, dayName: "Tuesday" },
      { day: 7, dayName: "Wednesday" },
      { day: 8, dayName: "Thursday" },
      { day: 9, dayName: "Friday" },
      { day: 10, dayName: "Saturday" },
      { day: 11, dayName: "Sunday" },
    ],
    [
      { day: 12, dayName: "Monday" },
      { day: 13, dayName: "Tuesday" },
      { day: 14, dayName: "Wednesday", isHighlighted: true },
      { day: 15, dayName: "Thursday" },
      { day: 16, dayName: "Friday" },
      { day: 17, dayName: "Saturday" },
      { day: 18, dayName: "Sunday" },
    ],
    [
      { day: 19, dayName: "Monday", label: "CBC (Complete Blood Count) + 2" },
      { day: 20, dayName: "Tuesday" },
      { day: 21, dayName: "Wednesday" },
      { day: 22, dayName: "Thursday" },
      { day: 23, dayName: "Friday" },
      { day: 24, dayName: "Saturday" },
      { day: 25, dayName: "Sunday" },
    ],
    [
      { day: 26, dayName: "Monday" },
      { day: 27, dayName: "Tuesday" },
      { day: 28, dayName: "Wednesday" },
      { day: 29, dayName: "Thursday" },
      { day: 30, dayName: "Friday" },
      { day: 31, dayName: "Saturday" },
      { day: 1, dayName: "Sunday", isOutsideMonth: true },
    ],
  ];

  if (showPopup) {
    return <Kalendarz onClose={() => setShowPopup(false)} />;
  }

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full min-h-screen relative [background:linear-gradient(to_bottom_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(140,217,255,1)_0%,rgba(0,38,57,1)_50%)_top_right_/_50%_50%_no-repeat]">
        {/* Logo */}
        <div className="absolute w-[239px] h-[193px] top-0 left-0">
          <img
            className="w-full h-full object-cover"
            alt="Medical"
            src="/MediCal.png"
          />
        </div>

        {/* Menu Icon */}
        <div className="absolute top-10 right-10">
          <button
            className="text-white h-auto"
            onClick={() => setShowMenu(true)}
          >
            <Menu className="w-10 h-10" />
          </button>
        </div>

        {/* Header */}
        <header className="pt-36 flex flex-col items-center">
          <h1 className="font-extrabold text-white text-[64px] text-center">
            Here it is!
          </h1>
          <p className="font-light text-white text-4xl text-center mt-4">
            Your personalised medical checkup schedule!
          </p>
        </header>

        {/* Month Navigator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center justify-between w-[233px] h-[59px] rounded-[20px] bg-white/90">
            <button className="h-auto">
              <ChevronLeft className="w-6 h-6 text-[#022c42]" />
            </button>
            <span className="font-medium text-[#022c42] text-[32px]">May</span>
            <button className="h-auto">
              <ChevronRight className="w-6 h-6 text-[#022c42]" />
            </button>
          </div>
        </div>

        {/* Find nearest check-up button */}
        <div className="absolute top-[355px] left-[120px] flex items-center">
          <button className="text-white p-0 h-auto flex items-center gap-1">
            <Search className="w-6 h-6" /> {/* 2. Dodanie ikony do przycisku */}
            <span className="font-medium text-white text-2xl">
              Find nearest check-up
            </span>
          </button>
        </div>

        {/* Export button */}
        <div className="absolute top-[355px] right-[120px] flex items-center">
          <button className="text-white p-0 h-auto flex items-center gap-1">
            <Download className="w-6 h-6" />
            <span className="font-medium text-white text-2xl">Export</span>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="mt-8 px-20 pb-20">
          <div className="w-full p-4">
            <div className="p-0">
              <div className="relative w-full">
                <div className="grid grid-cols-7 gap-1 p-2.5">
                  {calendarData.map((week, weekIndex) => (
                    <React.Fragment key={`week-${weekIndex}`}>
                      {week.map((day, dayIndex) => (
                        <div
                          key={`day-${weekIndex}-${dayIndex}`}
                          className={`relative p-2 min-h-[100px] rounded-xl shadow-md ${
                            day.isHighlighted
                              ? "bg-blue-100"
                              : "bg-[#edf1f5]"
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 text-sm font-semibold ${
                              day.isOutsideMonth
                                ? "text-gray-400"
                                : "text-black"
                            }`}
                          >
                            {day.day}
                          </span>
                          <div className="flex justify-center">
                            <span
                              className={`text-sm font-semibold ${
                                day.isOutsideMonth
                                  ? "text-gray-400"
                                  : "text-black"
                              }`}
                            >
                              {day.dayName}
                            </span>
                          </div>

                          {day.label && (
                            <button
                              onClick={() => setShowPopup(true)}
                              className="mt-4 text-[#19709B] text-[16px] leading-tight text-center"
                            >
                              <span>
                                CBC (Complete Blood Count){" "}
                                <span className="font-bold hover:underline">
                                  + 2
                                </span>
                              </span>
                            </button>
                          )}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu Overlay */}
      {showMenu && <SideMenu onClose={() => setShowMenu(false)} />}
    </div>
  );
}