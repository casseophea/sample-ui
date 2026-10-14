import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-[#1e1e1e] flex items-center justify-center p-0 sm:p-4 font-sans antialiased select-none">
      {/* Android Compact Device Frame */}
      <div className="w-full max-w-[412px] h-[100dvh] sm:h-[860px] max-h-[920px] bg-[#016ba8] text-white flex flex-col justify-between sm:rounded-[42px] overflow-hidden sm:ring-1 sm:ring-white/10 sm:shadow-2xl relative">
        
        {/* Top Section */}
        <div className="pt-3 px-6 pb-8 flex flex-col justify-start">
          {/* Android Status Bar */}
          <div className="w-full h-8 flex items-center justify-end gap-1.5 text-black pr-1 mb-6">
            {/* Cellular Signal Icon (4 bars) */}
            <div className="flex items-end gap-[2px] h-3.5">
              <span className="w-[3px] h-1.5 bg-black rounded-xs"></span>
              <span className="w-[3px] h-2 bg-black rounded-xs"></span>
              <span className="w-[3px] h-2.5 bg-black rounded-xs"></span>
              <span className="w-[3px] h-3.5 bg-black rounded-xs"></span>
            </div>

            {/* Wi-Fi Icon */}
            <svg
              className="w-4 h-4 text-black ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.25c3.78 0 7.2 1.5 9.72 3.96L12 19.3 2.28 11.21C4.8 8.75 8.22 7.25 12 7.25z" />
            </svg>

            {/* Battery Icon */}
            <div className="flex items-center ml-1">
              <div className="w-5 h-2.5 border-[1.5px] border-black rounded-[3px] p-[1px] flex items-center">
                <div className="w-3 h-full bg-black rounded-[1px]"></div>
              </div>
              <div className="w-[1.5px] h-1 bg-black rounded-r-xs"></div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="mt-2">
            <h1 className="font-serif text-[32px] sm:text-[34px] font-bold leading-[1.18] tracking-tight text-white">
              Log In to<br />
              Your Account
            </h1>
            <p className="mt-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#8ec8ec]">
              SUPPLYTRACK • CNHS STUDENT PORTAL
            </p>
          </div>
        </div>

        {/* Lower Card Section */}
        <div className="bg-[#d9dce1] flex-1 rounded-t-[34px] px-6 pt-7 pb-4 flex flex-col justify-between text-gray-800">
          <div>
            {/* Form Fields */}
            <div className="space-y-5">
              {/* Username Field */}
              <div>
                <label className="block text-[12px] font-bold tracking-wider text-gray-700 uppercase mb-2">
                  USERNAME / STUDENT ID
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username or ID"
                  className="w-full bg-white rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs border border-transparent focus:border-blue-400 transition"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[12px] font-bold tracking-wider text-gray-700 uppercase mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-xs border border-transparent focus:border-blue-400 transition tracking-widest placeholder:tracking-normal"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="text-[12px] text-[#016ba8] font-medium hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>

            {/* Log In Button */}
            <div className="mt-20">
              <button
                type="button"
                className="w-full bg-[#016ba8] active:bg-[#015d93] text-white font-bold text-base py-3.5 rounded-full shadow-md transition duration-150 cursor-pointer"
              >
                Log In
              </button>
            </div>
          </div>

          {/* Footer & Bottom Navigation */}
          <div className="mt-6 mb-1 flex flex-col items-center">
            <p className="text-[13px] text-gray-800 text-center">
              Don’t have an account?{' '}
              <button
                type="button"
                className="text-[#016ba8] font-semibold hover:underline cursor-pointer inline"
              >
                Create Account
              </button>
            </p>

            {/* Android Navigation Gesture Bar */}
            <div className="w-28 h-1 bg-black/40 rounded-full mt-5"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
