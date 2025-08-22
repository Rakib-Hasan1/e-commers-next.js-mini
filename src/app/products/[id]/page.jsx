import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailsPage({ params }) {
    const { id } = params;
    const product = await dbConnect("products").findOne({ _id: new ObjectId(id) });

    return (
        <div className="bg-gray-200 min-h-screen font-mozillaHeadline">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Page Title */}
                <h1 className="text-3xl font-bold text-gray-900 text-center pb-12">
                    Product Details
                </h1>

                {/* Product Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-md p-8">
                    {/* Left: Product Image */}
                    <div className="w-full">
                        <Image
                            width={600}
                            height={600}
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[450px] object-cover rounded-md shadow-md"
                        />
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 text-gray-700 text-base">
                            <p>
                                <span className="font-semibold">Category:</span> {product.category}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span>{" "}
                                <span className="text-primary font-bold">${product.price}</span>
                            </p>
                            <p>
                                <span className="font-semibold">Stock:</span> {product.stock} pcs
                            </p>
                            <p>
                                <span className="font-semibold">Created At:</span>{" "}
                                {new Date(product.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition">
                                Add to Cart
                            </button>
                            <Link
                                href="/products"
                                className="border border-gray-300 px-6 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition"
                            >
                                Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
