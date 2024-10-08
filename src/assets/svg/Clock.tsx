import React from "react";

const Clock = () => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="14" height="14" fill="white" />
        <g clip-path="url(#clip0_4688_369)">
          <path
            d="M8.00006 4.10229V8.00002H11.8978"
            stroke="#4C4C55"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00006 14.125C11.3828 14.125 14.1251 11.3827 14.1251 8C14.1251 4.61726 11.3828 1.875 8.00006 1.875C4.61732 1.875 1.87506 4.61726 1.87506 8C1.87506 11.3827 4.61732 14.125 8.00006 14.125Z"
            stroke="#4C4C55"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4688_369">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(1 1)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Clock;
