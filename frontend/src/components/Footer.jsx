import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-8 w-full bg-black px-8 md:px-[500px] flex md:space-y-0 justify-between text-sm md:text-md py-8'>
        <div className='flex flex-col text-white'>
            <p>Featured Blogs</p>
            <p>Most Viewed</p>
            <p>Readers Choice</p>
        </div>

        <div className='flex flex-col text-white'>
            <p>Forum</p>
            <p>Support</p>
            <p>Recent Posts</p>
        </div>

        <div className='flex flex-col text-white'>
            <p>Privacy Policy</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
    <p className='py-1 text-center text-white bg-black pb-2'>All rights reserved @Thoughts 2024</p>
    </>
  )
}

export default Footer