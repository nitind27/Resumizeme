import React from "react";

const Board = () => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z"
          fill="#4C4C55"
        />
      </svg>
    </div>
  );
};

export default Board;
