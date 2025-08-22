import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function ProductsPage() {
  const products = await dbConnect("products").find({}).toArray();
  return (
    <div>
      <div className=''>
        <h1 className='font-bold text-3xl text-primary text-center pt-10'>All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 p-4">
          {products.map((p) => (
            <Link key={p._id} href={`/products/${p._id}`}>
              <div className="card bg-base-100 hover:scale-105 hover:shadow-md transition">
                <figure>
                  <Image width={500} height={500} src={p.image} alt={p.name} className="h-56 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.name}</h2>
                  <p>{p.category}</p>
                  <p className="text-primary font-bold">${p.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
