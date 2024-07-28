import React from 'react'
import {IF} from '../url'

const HomePosts = ({post}) => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src={IF+post.photo} className='h-full w-full object-cover' />
      </div>
      <div className='flex flex-col w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          {post.title}
        </h1>
        <div className='flex mb-2 md:mb-4 justify-between items-center text-sm font-semibold text-gray-500'>
          <p>{post.username}</p>
          <div className='flex space-x-2'>
            <p>{(new Date(post.updatedAt).toString().slice(0,15))}</p>
            <p>{post.createdAt.slice(12,16)}</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>{post.desc}</p>
      </div>
    </div>
  )
}

export default HomePosts