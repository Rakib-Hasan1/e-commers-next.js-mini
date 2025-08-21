import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function Products() {
    const products = await dbConnect("products").find({}).toArray();
  return (
    <div className='font-mozillaHeadline'>
        {JSON.stringify(products)}
    </div>
  )
}
