import Link from 'next/link'
import React from 'react'

export default function FooterIcons({icons, link}) {
  return (
    <Link href={link? link : '/'} className='w-fit p-2 rounded-sm bg-primary text-white'>
        {icons}
    </Link>
  )
}
