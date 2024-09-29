import React from 'react'
import {star} from '../assets/icons/index.js'

export default function PopularProductCard({imgURL, name, price}) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
      <div className='mt-8 flex justify-start gap-2.5 '>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='font-palanquin font-semibold text-2xl mt-4 leading-normal '>{name}</h3>
      <p className='font-montserrat text-lg text-coral-red mt-2 leading-normal'> {price}</p>
    </div>
  )
}
