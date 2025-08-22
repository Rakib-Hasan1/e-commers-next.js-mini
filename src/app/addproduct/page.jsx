"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProductPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage("");
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add product");

      setMessage("Product added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setMessage("Failed to add product.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-10 font-mozillaHeadline">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              {...register("name", { required: "Product name is required" })}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              placeholder="Enter product price"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be at least 0" },
              })}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              placeholder="Enter product category"
              {...register("category")}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
            placeholder="Enter product description"
              {...register("description")}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              {...register("image")}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
}
