"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

function CategoryList() {

    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{
        getCategoryList();
      },[])
    
    /**
     * Used to get Category List
     */
    
      const getCategoryList=()=>{
        GlobalApi.GetCategory().then(resp=>{
          console.log(resp.categories);
          setCategoryList(resp.categories);
        })
      }
  return (
    <div className='mt-10 relative'>
      <div className='flex gap-4 overflow-auto'>
        {categoryList&&categoryList.map((category,index)=>(
          <div key={index} 
          className='flex flex-col items-center
           gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-pink-50 cursor-pointer group'>
              <Image src={category.icon?.url} alt={category.name}
              width={50}
              height={40}
              className='group-hover:scale-125 transition-all duration-200'
              />
              <h2 className='text-sm font-medium group-hover:text-primary'>{category.name}</h2>
          </div>
        ))}
      </div>
      <ArrowRightCircle className='absolute -right-10 top-9
      bg-primary rounded-full text-white h-8 w-8 cursor-pointer
      '/>
    </div>
  )
}

export default CategoryList