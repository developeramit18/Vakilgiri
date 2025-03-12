import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import SecondaryButton from './SecondaryButton'
import { IoCall } from 'react-icons/io5'

export default function Features() {

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
    <div className='w-full min-h-screen bg-secondary poppins'>
      <div className='w-full max-w-[910px] text-white px-4 py-8 text-center'>
        <h2 className='text-3xl font-semibold pt-4'>Features of Pvt. Ltd. Company</h2>
        <h4>Company Registration Online in India</h4>
        <p className='text-justify my-4 text-sm'>In order to boost the “Make in India”, “Start-Up India” and “Skill India”Q Initiatives launched by the Central Government, there are several benefits that has been associated with the Pvt. Ltd. Company Registration. The process of registering a Private Limited Company has also changed to 100% online so as to reduce the formalities and time that was quite high previously.</p>
        <p className='text-justify my-4 text-sm'>Here are some amazing benefits of a Private Limited Company registration process in India:</p>
        
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
          <SecondaryButton icon={<IoCall className='text-xl' /> } primary={true} text={'Get Online Company Registration'} />
        </div>
      </div>
    </div>
  )
}
