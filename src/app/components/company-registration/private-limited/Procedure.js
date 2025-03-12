import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import SecondaryButton from './SecondaryButton'
import { IoCall } from 'react-icons/io5'

export default function Procedure() {

  const Feature = ()=>{
    return (
      <div className='w-full p-4 rounded-lg bg-white text-black text-left'>
        <FaBuilding className='text-primary text-2xl' />
        <h4 className='text-primary text-md font-medium'>Separate Legal Entity</h4>
        <p className='text-xs'>A Private Limited Company act as a separate legal entity. This means that all the directors and the shareholders of the company are not liable towards risk and losses. </p>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen bg-[#EEEEEE] poppins'>
      <div className='w-full max-w-[910px] text-black px-4 py-8 text-center'>
        <h2 className='text-3xl font-semibold pt-4'>Company Registration Procedure</h2>
        <h4>Steps to register Private Limited Company</h4>
        <p className='text-justify my-4 text-sm'>The registration of a Private Limited Company in India generally takes upto 20-25 days but with Vakilgiri- Legal Consultants, your Online Company Registration can be completed with 7 working days. Isn’t it amazing. Let look at how we do it…</p>
        
        <div className='grid grid-cols-3 gap-4'>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
        </div>

        <div className='flex justify-center items-center my-6'>
          <SecondaryButton icon={<IoCall className='text-xl' /> } text={'Talk to Our Expert'} />
        </div>
      </div>
    </div>
  )
}
