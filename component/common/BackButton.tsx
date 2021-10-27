import React from 'react'
import BackArrowIcon from '../../public/icons/backArrow.svg'
import Link from 'next/link'

interface BackButtonProps {
  name: string
  href: string
}

const BackButton = ({ name, href }: BackButtonProps) => {
  return (
    <Link href={href}>
      <button type="button" className="flex items-center">
        <div className="bg-ternary w-20 h-8 rounded-lg text-white flex justify-center items-center mr-4">
          <BackArrowIcon className="fill-current" />
        </div>
        <p className="font-bold">{name}</p>
      </button>
    </Link>
  )
}

export default BackButton
