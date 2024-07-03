import React from 'react'
import BlogCard from '@/components/BlogCard'
import { blogs } from '@/utils/constants'
import Link from 'next/link'
function BlogPage() {
  return (
    <section className='mt-20 p-8 bg-[#F5F6F8] h-full overflow-hidden' >
        <div className='grid grid-col-1 md:grid-cols-3 gap-8 p-8'>
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <BlogCard key={blog.id} blogData={blog} />
              </Link>
            ))}
        </div>
    </section>
  )
}

export default BlogPage