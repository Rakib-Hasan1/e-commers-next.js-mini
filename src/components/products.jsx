import dbConnect from '@/lib/dbConnect'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

export default async function Products() {
  const products = await dbConnect("products").find({}).limit(8).toArray();
  return (
    <div className='bg-gray-200'>
      <div className='font-mozillaHeadline w-11/12 mx-auto py-6 lg:py-12'>
      <div className='bg-base-300 negative'>
        <div className='w-11/12 mx-auto'>
          <h1 className='font-bold text-3xl text-primary text-center pt-10'>Top Selling Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {products.map((p) => (
              <Link key={p._id} href={`/products/${p._id}`}>
                <div className="card bg-gray-100 hover:scale-105 hover:shadow-md transition p-4 rounded-md">
                  <figure>
                    <Image width={500} height={500} src={p.image} alt={p.name} className="h-56 w-full rounded-md pb-3 object-cover" />
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
          <Link href={"/products"}><Button className={"cursor-pointer"}>See All Products</Button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}
