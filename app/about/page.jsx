import FAQ from '@/components/FAQ'
import React from 'react'

const AboutPage = () => {
  return (
    <section className='w-full mt-20 px-0 py-8 md:p-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 overflow-hidden'>
    <div className='w-full md:w-[45%]'>
      <img src="/books-svgrepo-com.svg" className='w-[500px] h-[400px]' alt="book" />
    </div>
    <div className='w-full md:w-[45%] gap-8 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-8 justify-center items-center p-4'>
        <h2 className='text-3xl font-bold text-center'>About Us</h2>
        <p className='mt-4 max-w-[700px] min-w-[300px] text-start leading-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          turpis in nisl tincidunt tincidunt. Sed auctor, felis nec
          sollicitudin ultrices, nunc nisl tincidunt nunc, nec scelerisque
          libero nisl nec sapien. Sed in turpis in nisl tincidunt tincidunt.
          Sed auctor, felis nec sollicitudin ultrices, nunc nisl tincidunt
          nunc, nec scelerisque libero nisl nec sapien. Sed in turpis in nisl
          tincidunt tincidunt. Sed auctor, felis nec sollicitudin ultrices,
          nunc nisl tincidunt nunc, nec scelerisque libero nisl nec sapien.
          Sed in turpis in nisl tincidunt tincidunt. Sed auctor, felis nec
          sollicitudin ultrices, nunc nisl tincidunt nunc, nec scelerisque
          libero nisl nec sapien.
        </p>
      </div>
      <div>
        <FAQ />
      </div>
      
    </div>
    </section>
  )
}

export default AboutPage
