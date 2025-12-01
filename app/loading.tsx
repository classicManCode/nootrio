export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
        {/* Animated Logo/Icon */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-800/20 border-t-green-800 animate-spin"></div>
          </div>

          {/* Middle pulsing ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-green-800/10 animate-pulse"></div>
          </div>

          {/* Center icon */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-green-800 to-emerald-900 flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <div className="border border-black/20 py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-sm md:text-base text-black/70 font-medium">
              Loading
            </span>
          </div>

          {/* Animated dots */}
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-green-800 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Optional tagline */}
        <p className="text-sm md:text-base text-black/50 text-center max-w-xs">
          Preparing your nutrition insights...
        </p>
      </div>
    </div>
  );
}
