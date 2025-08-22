"use client";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-base-100">
            <motion.div
                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <p className="ml-4 text-lg font-semibold text-primary">
                Loading, please wait...
            </p>
        </div>
    );
}
