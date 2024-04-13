import Image from 'next/image'
import React from 'react'

function BuisnessItem({buisness}) {
  return (
    <div>
        <Image src={buisness.banner?.url} alt={buisness.name}
         width={500}
         height={130}
        />
    </div>
  )
}

export default BuisnessItem