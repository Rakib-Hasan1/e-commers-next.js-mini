"use client";
import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-4">
                {/* Bouncing bars */}
                <div className="flex space-x-2">
                    <span className="w-3 h-10 bg-blue-500 rounded animate-bounce inline-block"></span>
                    <span className="w-3 h-10 bg-blue-500 rounded animate-bounce inline-block" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-3 h-10 bg-blue-500 rounded animate-bounce inline-block" style={{ animationDelay: "0.4s" }}></span>
                </div>
                <p className="text-white font-medium">Loading...</p>
            </div>

            {/* Inline keyframes for bounce animation */}
            <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .animate-bounce {
          animation: bounce 0.6s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
}
