import React from 'react';

interface SVCMLogoProps {
  className?: string;
  size?: number;
}

export const SVCMLogo: React.FC<SVCMLogoProps> = ({ className = '', size = 36 }) => {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 100 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top green leaves */}
      <path
        d="M50 18C44 8 32 10 32 10C32 10 36 22 45 22C46 22 48 20 50 18Z"
        fill="#4ade80"
        stroke="#166534"
        strokeWidth="2"
      />
      <path
        d="M50 18C56 6 68 8 70 8C70 8 68 20 57 22C55 22 52 20 50 18Z"
        fill="#22c55e"
        stroke="#166534"
        strokeWidth="2"
      />
      <path
        d="M50 20V26"
        stroke="#166534"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Yellow / Golden Cashew Apple Body */}
      <path
        d="M32 30C22 42 18 68 26 84C32 94 68 94 74 84C82 68 78 42 68 30C60 22 40 22 32 30Z"
        fill="#facc15"
        stroke="#15803d"
        strokeWidth="3.5"
      />

      {/* Shading on Apple */}
      <path
        d="M66 38C74 52 72 74 66 84"
        stroke="#eab308"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* SVCM Monogram inside Apple */}
      <g fill="#166534" fontFamily="system-ui, sans-serif" fontWeight="900" textAnchor="middle">
        {/* S */}
        <text x="50" y="46" fontSize="16" letterSpacing="0.05em">
          S
        </text>
        {/* V */}
        <text x="50" y="62" fontSize="17" letterSpacing="0.05em">
          V
        </text>
        {/* C M */}
        <text x="50" y="78" fontSize="13" letterSpacing="0.08em">
          CM
        </text>
      </g>

      {/* Raw Cashew Nut at bottom */}
      <path
        d="M36 88C32 89 28 94 30 102C33 114 46 118 55 116C64 114 68 106 67 98C66 92 62 89 57 88C52 87 48 91 44 91C40 91 38 88 36 88Z"
        fill="#857b64"
        stroke="#3f3b2f"
        strokeWidth="3"
      />
      {/* Hilum notch on nut */}
      <path
        d="M44 91C48 94 52 93 54 89"
        stroke="#292524"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
