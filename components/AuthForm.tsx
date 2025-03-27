"use client"

import React from 'react'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'


const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const AuthForm = () => {
  const logo=`https://images.stockcake.com/public/7/d/e/7de5e9f4-7e5a-4c29-b504-90cb82cfb0f5_large/mystical-chain-magic-stockcake.jpg`

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
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
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 mt-2 bg-blue-900">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} className='border border-amber-500' />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>      
    </div>
  )
}

export default AuthForm