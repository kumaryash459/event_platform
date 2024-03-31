import React, { startTransition, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Category, { ICategory } from '@/lib/database/models/category.model';
  
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '../ui/input';
  

type DropdownProps = {
    value?: string;
    onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [category, setCategory] = useState('');
    const handleAddCategory=()=>{

    }
    return (
        <div>
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger >
            <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
            {categories.length > 0 && categories.map((Category)=>(
                <SelectItem key={category} value='category._id'>
                    {Category.name}
                </SelectItem>
            ))}
            <AlertDialog>
  <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Open</AlertDialogTrigger>
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle >New Category</AlertDialogTitle>
      <AlertDialogDescription>
        <Input type='text' placeholder='category name' onChange={(e)=>setCategory(e.target.value)} className="input-field mt-3"/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=> startTransition(handleAddCategory)}>Add</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </SelectContent>
        </Select>

        </div>
    );
};

export default Dropdown;
