import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'

interface FormFieldProps<T extends FieldValues>{
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
  type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({ control, label, name, placeholder, description, type='text' } : FormFieldProps<T>) => (
  <Controller 
    control={control} 
    name={name} 
    render={( { field } ) => (
      <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} className='border-7 border-red-500 input' />
        </FormControl>
        <FormDescription className='ml-10'>
          {description}
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />  
)


export default FormField