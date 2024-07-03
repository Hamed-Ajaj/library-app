import React from 'react'

const BlogCard = ({blogData}) => {
  return (
    <div className='flex flex-col bg-white min-h-[700px] shadow-lg'>
        <div >
            <img src={blogData.img} className='w-full' alt="blog img" />
        </div>
        <div className=' px-4 py-8 flex flex-col items-center space-y-8'>
            <h1 className='text-center font-medium text-[2rem] text-wrap leading-9 p-2'>{blogData.title}</h1>
            <p className='text-[1rem] text-center max-w-[400px] p-2'>{blogData.desc}</p>
        </div>
    </div>
  )
}

export default BlogCard
