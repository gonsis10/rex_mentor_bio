import React, { useState } from "react";

const Dropdown = ({ label, options, selectedOptions, onChange, filterKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      onChange(
        filterKey,
        selectedOptions.filter((item) => item !== option)
      );
    } else {
      onChange(filterKey, [...selectedOptions, option]);
    }
  };

  return (
    <div className="relative mb-4 w-full">
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="block w-full text-left px-4 py-2 text-gray-700 bg-white rounded-t-lg focus:outline-none"
        >
          {label}
        </button>
        {isOpen && (
          <div className="absolute mt-1 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 w-full max-h-64 overflow-y-auto">
            <div className="flex flex-col space-y-2 p-2">
              {options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;