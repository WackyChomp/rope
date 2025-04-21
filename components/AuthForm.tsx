"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormField from './FormField'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/client'
import { signUp, signIn } from '@/lib/actions/auth.action'


const authFormSchema = (type : FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}


const AuthForm = ({ type }: { type: FormType }) => {
  const logo=`https://images.stockcake.com/public/7/d/e/7de5e9f4-7e5a-4c29-b504-90cb82cfb0f5_large/mystical-chain-magic-stockcake.jpg`

  const router = useRouter();
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
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if(type === 'sign-up'){
        const { name, email, password } = values;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        })
        if(!result?.success){
          toast.error(result?.message);
          return;
        }

        console.log('You have SIGN UP', values)
        toast.success('Account created successfully. Go sign in!')
        router.push('/sign-in')
      } else{
        const { email, password } =  values;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const idToken = await userCredential.user.getIdToken();

        if(!idToken){
          toast.error('Sign in failed');
          return
        }

        await signIn({
          email, idToken
        })
        console.log('You have SIGN IN', values)
        toast.success('Signed in successfully!')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(`There was an error: ${error}`)
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

        <h3 className='bg-indigo-900 p-3 rounded-md text-4xl flex justify-center'>Refine your expertise with an online AI Agent</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 form p-4 mt-2 bg-blue-900">
            {!isSignIn && (
              <FormField
                control={form.control}
                name='name'
                label='Name'
                placeholder='Name Goes Here'
                description='Preferrably your real name - Ex: Andrew | Bobby | Colt'
              />
            )}
              <FormField
                control={form.control}
                name='email'
                label='Email'
                placeholder='Email Goes Here'
                type='email'
                description='Reliable e-mail address to recieve newsletter and updates'
              />
              <FormField
                control={form.control}
                name='password'
                label='Password'
                type='password'
                placeholder='Password Goes Here'
                description='Shhh... secret credential that you can reliably access without others knowing'
              />

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