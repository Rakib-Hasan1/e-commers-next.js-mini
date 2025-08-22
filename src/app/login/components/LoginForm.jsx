"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // For now, just redirect without actual login
        router.push("/products");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 rounded-md p-6 lg:p-10 bg-gray-100 w-full max-w-md"
            >
                <h1 className="font-bold text-3xl text-center text-blue-600 mb-4">Login</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", { required: "Email is required" })}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", { required: "Password is required" })}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
