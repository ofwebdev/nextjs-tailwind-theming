import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const SettingsPopup: React.FC = () => {
  const { currentTheme, switchTheme } = useTheme();
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white bg-blue-500"
        onClick={togglePopup}
      >
        Settings
      </button>
      {popupVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75"
          // onClick={togglePopup}
        >
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="flex space-x-2 mb-4 flex-col">
              <ThemeSwitcher />
              {/* <div className="mt-5">
                <button
                  onClick={() => switchTheme("dark")}
                  className="px-4 py-2 rounded-lg text-white bg-blue-500 mr-3"
                >
                  Dark
                </button>
                <button
                  onClick={() => switchTheme("light")}
                  className="px-4 py-2 rounded-lg text-white bg-blue-500"
                >
                  Light
                </button>
              </div> */}
            </div>

            <hr />
            <button
              className="px-4 py-2 rounded-lg text-white bg-red-500 mt-3"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;
