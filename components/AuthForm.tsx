"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"


const authFormSchema = (type : FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}


const AuthForm = ({ type }: { type: FormType }) => {
  const logo=`https://images.stockcake.com/public/7/d/e/7de5e9f4-7e5a-4c29-b504-90cb82cfb0f5_large/mystical-chain-magic-stockcake.jpg`

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if(type == 'sign-up'){
        console.log('You have SIGN UP', values)
      } else{
        console.log('You have SIGN IN', values)
      }
    } catch (error) {
      console.log(error)

    }
  }

  const isSignIn = type === 'sign-in';

  return (
    <div className='card_border lg:min-w-[600px]'>
      <div className="flex flex-col gap-8 card py-3 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image 
            src={logo}
            alt='logo'
            height={40}
            width={100}
            className='rotate-90 rounded-md'
          />
          <h2 className="ml-10 text-indigo-500 bg-indigo-900 p-1.5 rounded-md">Rope</h2>
        </div>

        <h3>Refine your expertise with an online AI Agent</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 form p-4 mt-2 bg-blue-900">
            {!isSignIn && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button type="submit" className='btn'>{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
          </form>
        </Form>

        <p>
          {isSignIn ? 'No account yet?' : 'Have an account already?'}
          <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className='font-bold text-user-primary ml-1'
          >
            {!isSignIn ? 'Sign In' : 'Sign up'}
          </Link>
        </p>
    </div>
    </div>
  )
}

export default AuthForm