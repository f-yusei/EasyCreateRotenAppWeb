'use client'

import type React from 'react'
import { useState } from 'react'

interface FooterDrawerProps {
  children: React.ReactNode
}

export function FooterDrawerComponent({ children }: FooterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={`fixed ${isOpen ? 'bottom-16 shadow-2xl' : 'bottom-16'} left-0 right-0 bg-white border rounded-t`}
      >
        <div className='max-w-screen-xl mx-auto relative'>
          <button
            onClick={toggleDrawer}
            className='absolute top-0 left-1/2 border transform -translate-x-1/2 -translate-y-full 
                     w-16 h-8 bg-white   rounded-t-md focus:outline-none flex justify-center items-end'
            aria-label={isOpen ? 'Close footer' : 'Open footer'}
          >
            <div
              className={`w-0 h-0 border-l-[12px] border-r-[12px] mb-1 ${
                isOpen
                  ? 'border-t-[15px] border-l-transparent border-r-transparent border-t-gray-800'
                  : 'border-b-[15px] border-l-transparent border-r-transparent border-b-gray-800'
              } transition-transform duration-300`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className='p-4'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
