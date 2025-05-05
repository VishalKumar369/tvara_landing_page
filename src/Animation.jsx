import React from "react";

const Animation = () => {
  return (
    <>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orangeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="100%" stop-color="#22c55e" />
          </linearGradient>

          <linearGradient id="blueGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="2" dy="4" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="150"
          fill="url(#orangeGreen)"
          opacity="0.1"
        >
          <animate
            attributeName="r"
            values="150;160;150"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.2;0.1"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#orangeGreen)"
          stroke-width="2"
          stroke-dasharray="10 5"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="url(#blueGreen)"
          stroke-width="2"
          stroke-dasharray="20 10"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 200 200"
            to="0 200 200"
            dur="45s"
            repeatCount="indefinite"
          />
        </circle>

        {/* <g filter="url(#softShadow)">
          <circle cx="200" cy="200" r="80" fill="#ffffff" opacity="0.9" />
          <circle
            cx="200"
            cy="200"
            r="76"
            fill="white"
            stroke="url(#orangeGreen)"
            stroke-width="4"
            
          />
        </g> */}

        <g id="micIcon">
          <circle
            cx="200"
            cy="200"
            r="24"
            fill="url(#orangeGreen)"
            opacity="0.8"
          >
            <animate
              id="pulseAnim"
              attributeName="r"
              values="24;26;24"
              dur="2s"
              begin="0s;pulseAnim.end+1s"
            />
          </circle>
          <path
            d="M200 185 L200 215 M190 190 Q200 180 210 190 L210 210 Q200 220 190 210 Z"
            stroke="#ffffff"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </g>

        <g id="voiceWaves">
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="none"
            stroke="url(#orangeGreen)"
            stroke-width="2"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="40;120"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="none"
            stroke="url(#blueGreen)"
            stroke-width="2"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="40;120"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="none"
            stroke="url(#orangeGreen)"
            stroke-width="2"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="40;120"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;0"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g id="equalizer" transform="translate(160, 280)">
          <rect
            x="0"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;20;4"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="12"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;30;4"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="24"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;15;4"
              dur="0.7s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="36"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;25;4"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="48"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;18;4"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="60"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;28;4"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="72"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;12;4"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="84"
            y="0"
            width="8"
            height="4"
            rx="2"
            fill="url(#orangeGreen)"
          >
            <animate
              attributeName="height"
              values="4;22;4"
              dur="1.3s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        <circle cx="280" cy="120" r="15" fill="url(#orangeGreen)" opacity="0.3">
          <animate
            attributeName="cy"
            values="120;110;120"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="120" cy="280" r="12" fill="url(#blueGreen)" opacity="0.3">
          <animate
            attributeName="cy"
            values="280;290;280"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="200"
          r="85"
          stroke="url(#orangeGreen)"
          stroke-width="3"
          fill="none"
          opacity="0"
        >
          <animate
            id="clickEffect"
            attributeName="r"
            values="85;95;85"
            dur="1s"
            begin="0s;clickEffect.end+3s"
          />
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur="1s"
            begin="0s;clickEffect.end+3s"
          />
        </circle>
      </svg>
    </>
  );
};

export default Animation;