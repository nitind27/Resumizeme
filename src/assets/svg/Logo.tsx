import React from "react";

const Logo = () => {
  return (
    <div>
      <svg
        width="90"
        height="24"
        viewBox="35 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Example SVG</title>
        <g clipPath="url(#clip0_4688_274)">
          <path
            d="M12 24H0V8.00154C0 3.58147 3.58147 0 8.00154 0H20.0015V15.9985L12 24Z"
            fill="url(#paint0_linear_4688_274)"
          />
          <path
            d="M12 15.9985H20.0015C20.0015 20.5483 17.1382 24 12 24V15.9985Z"
            fill="#378EFF"
          />
          <path
            d="M20 6.66669H10C8.15905 6.66669 6.66667 8.15907 6.66667 10C6.66667 11.841 8.15905 13.3334 10 13.3334H20V6.66669Z"
            fill="#14141F"
          />
          <path
            d="M20 5.33331H24.6667C26.5076 5.33331 28 6.8257 28 8.66665C28 10.5076 26.5076 12 24.6667 12H20V5.33331Z"
            fill="#5DDFA9"
          />
          <path
            d="M20 5.33331H10C8.15905 5.33331 6.66667 6.8257 6.66667 8.66665C6.66667 10.5076 8.15905 12 10 12H20V5.33331Z"
            fill="#37B982"
          />
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_4688_274"
            x1="2.10348"
            y1="2.46023"
            x2="16.7768"
            y2="20.1822"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0866F5" />
            <stop offset="1" stopColor="#0043A6" />
          </linearGradient>
          <clipPath id="clip0_4688_274">
            <rect width="114" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
