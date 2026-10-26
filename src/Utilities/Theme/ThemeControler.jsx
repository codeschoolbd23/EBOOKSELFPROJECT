import React from "react";

const ThemeControler = ({ class_name }) => {
  const colorData = [
    { id: 1, color_name: "Default", color_value: "synthwave" },
    { id: 2, color_name: "light", color_value: "light" },
    { id: 3, color_name: "night", color_value: "night" },
    { id: 4, color_name: "dark", color_value: "dark" },
  ];
  return (
    <>
      <div className={`dropdown dropdown-hover ${class_name}`}>
        <div tabIndex={0} role="button" className="menu menu-horizontal">
          <span className="mr-1">Theme</span>
          <svg
            className="w-3 h-4 fill-orange-600 opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 bg-base-100 w-24 mt-10"
        >
          {colorData.map((cl) => (
            <li key={cl.id}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-outline hover:bg-primary border-0"
                aria-label={cl.color_value}
                value={cl.color_value}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ThemeControler;
