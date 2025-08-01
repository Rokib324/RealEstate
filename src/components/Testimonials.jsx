import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
     className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
    <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-2 text-center'>Customer <span className='text-blue-800 underline underline-offset-4 decoration-1 underline-blue-900 font-light'>Testimonials</span></h1>
    <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>What customers
    say about us</p>
    <div className='flex gap-8 flex-wrap justify-center'>
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 object-cover rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.name} />
                <h2 className='text-lg font-medium text-gray-800 mb-2'>{testimonial.name}</h2>
                <p>{testimonial.text}</p>
                <div className='flex justify-center items-center'>
                    {Array.from({length: testimonial.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} alt="star" className='w-5 h-5 object-contain' />
                    ))}
                </div>
            </div>
        ))}
    </div>
    </motion.div>
  )
}

export default Testimonials