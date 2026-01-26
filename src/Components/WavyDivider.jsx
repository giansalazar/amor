export default function WavyDivider({ className = "", height = 300 }) {
    return (
      <div className={`w-full overflow-hidden ${className}`} style={{ height: `${height}px` }}>
        <svg
          viewBox="0 0 1200 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b8a6db" />
              <stop offset="50%" stopColor="#7e57c2" />
              <stop offset="100%" stopColor="#5e3ea1" />
            </linearGradient>
          </defs>
          <path
            d="M0,250 C400,350 800,150 1200,250 L1200,300 L0,300 Z"
            fill="url(#purpleGradient)"
          />
        </svg>
      </div>
    );
  }