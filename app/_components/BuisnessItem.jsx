import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BuisnessItem({buisness}) {

  const CalculateRating=()=>{
    let total=0;
    let count=0;
    buisness?.reviews.forEach(item=>{
      total=total+item.star;
      count++;
    })

    const result=total/count;
    return result?result.toFixed(1):5;
  }

  return (
    <Link 
    href={'/restaurant/'+buisness?.slug}
    className='p-3
    hover:border rounded-xl
    hover:border-primary transition-all duration-100 ease-in-out
    hover:bg-pink-50
    hover: cursor-pointer'>
        <Image src={buisness.banner?.url} alt={buisness.name}
         width={500}
         height={130}
         className='h-[130px] rounded-xl object-cover'
        />
        <div className='mt-2'>
            <h2 className='font-bold text-lg'>{buisness.name}</h2>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <Image  src="/star.png" alt='star'
                width={30}
                height={30}/>
              <label className='text-yellow-600 text-sm'>{CalculateRating()}</label>
              <h2 className='text-gray-400 text-sm'>{buisness?.restroType[0]}</h2>
              </div>
                <h2 className='text-sm text-primary'>{buisness.categories[0].name}</h2>
            </div>
        </div>
    </Link>
  )
}

export default BuisnessItem