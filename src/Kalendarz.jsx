import React from "react";

export const Kalendarz = ({ onClose }) => {
  return (
    <div className="w-full min-h-screen bg-[#002b45] text-white flex flex-col items-center justify-start p-10">
      {/* Close bar (clickable) */}
      <div
        onClick={onClose}
        className="w-16 h-2 bg-white rounded-full cursor-pointer mb-6"
        title="Click to close"
      />

      {/* Header */}
      <h2 className="text-3xl font-bold mb-2">May 19 – Monday</h2>
      <p className="text-lg mb-8 text-gray-300">Scheduled Medical Tests</p>

      {/* Tests List */}
      <div className="bg-white text-[#002b45] rounded-2xl px-6 py-4 w-full max-w-md space-y-4">
        <div className="bg-[#dee3ea] rounded-full py-2 text-center font-semibold">
          CBC (Complete Blood Count)
        </div>
        <div className="bg-[#dee3ea] rounded-full py-2 text-center font-semibold">
          TSH (Thyroid Stimulating Hormone)
        </div>
      </div>
    </div>
  );
};
