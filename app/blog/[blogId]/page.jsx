import React from 'react'
import { blogs } from '@/utils/constants'
const BlogDetails = ({params}) => {
    const {blogId} = params
    const blog = blogs.find((blog) => blog.id == blogId)
  return (
    <div className='mt-20 p-8'>
                    <div key={blog.id}>
                        <h1 className='text-center font-medium text-[2rem] text-wrap leading-8 p-2'>{blog.title}</h1>
                        <img src={blog.img} className='w-full' alt="blog img" />
                        <p className='text-[1rem] text-start max-w-[300px] p-2'>{blog.fullDesc}</p>
                    </div>
    </div>
  )
}

export default BlogDetails
