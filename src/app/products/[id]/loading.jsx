"use client";
import React from "react";

export default function loading() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
            {/* Title Skeleton */}
            <div className="h-8 w-1/3 bg-gray-300 rounded-lg mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-2xl p-8">
                {/* Left: Image Skeleton */}
                <div className="w-full">
                    <div className="w-full h-[450px] bg-gray-200 rounded-xl"></div>
                </div>

                {/* Right: Text Skeleton */}
                <div className="flex flex-col space-y-6">
                    <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-200 rounded"></div>

                    {/* Info Grid Skeleton */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
                        <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="flex gap-4 mt-6">
                        <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
                        <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
