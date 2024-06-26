'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/Validator"
import { eventDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import {FileUploader} from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type EventFormProps={
    userId:String,
    type:"Create" | "Update"
}
const initialValues = eventDefaultValues;

const EventForm = ({userId,type }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([])

    // 1. Define your form.
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    
    <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              
              <FormControl>
                <Input placeholder="Event title" {...field} className="input-field"/>
              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="w-full ">
              
              <FormControl>
                <Dropdown onChangeHandler={field.onChange} value={field.value} />
              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              
              <FormControl className="h-72">
                <Textarea  placeholder="Description" {...field} className="rounded-2xl bg-grey-50 " />

              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              
              <FormControl className="h-72">
               <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />

              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        
          <div className="flex flex-col gap-5 md:flex-row">
          <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full">
              
              <FormControl>
                <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                <Image
                        src="/assets/icons/location-grey.svg"
                        alt="calendar"
                        width={24}
                        height={24}
                      />
                <Input placeholder="location" {...field} className="input-field"/>
                </div>
              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          {/* Date picker */}
          <div className="flex flex-col gap-5 md:flex-row">
          <FormField
          control={form.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="w-full">
              
              <FormControl>
                <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                <Image
                        src="/assets/icons/calendar.svg"
                        alt="calendar"
                        width={24}
                        height={24}
                      />
                      <p className="ml-3 whitespace-nowrap text-gray-600 ">start Date:</p>
                      <DatePicker selected={field.value} onChange={(date:Date) => field.onChange(date)} 
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat='dd/MM/yyyy h:mm aa'
                      wrapperClassName="datePicker"
                      />

                </div>
              </FormControl>    
              <FormMessage />
            </FormItem>
          )}
        />
          </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
      
    </div>
  )
}

export default EventForm
