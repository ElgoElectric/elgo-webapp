import React from 'react'
import styles from '../constants/style'
import { arrowUp } from '../../../public'
import Image from 'next/image'
import Link from 'next/link'

const BookDemo = () => {
  return (
    <Link href='/api/auth/login'>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-green-500 to-blue-600 p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Book</span>
          </p>
          <Image
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Demo</span>
        </p>
      </div>
    </div>
    </Link>
  )
}

export default BookDemo;