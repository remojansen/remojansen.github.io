import React from "react";

export function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M16 50A34 34 0 0 0 84 50A34 36 0 0 1 16 50"
        fill="#ffbd39"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.6393442622950818s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  );
}
