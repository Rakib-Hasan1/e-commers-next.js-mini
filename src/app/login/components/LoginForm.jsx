"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => signIn("credentials", data);

    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 border border-gray-300 rounded-md p-5 lg:p-10'>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='Enter Email' className='border border-gray-300 rounded-md px-3 py-2' {...register("email", { required: true })} />
                {errors.email && <span className='text-red-400'>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder='Enter Password' className='border border-gray-300 rounded-md px-3 py-2' {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className='text-red-400'>This field is required</span>}

                <input type="submit" className='border border-gray-300 rounded-md py-2 bg-blue-500 text-white cursor-pointer' />
            </form>
        </div>
    )
}
