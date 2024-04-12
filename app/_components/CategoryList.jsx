"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';

function CategoryList() {

    const [CategoryList,setCategoryList]=useState([]);
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
    <div>CategoryList</div>
  )
}

export default CategoryList