import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'>About <span className='text-blue-800 underline underline-offset-4 decoration-1 underline-blue-900 font-light'>Our Brand</span></h1>
        <p className='text-gray-500 text-center mb-8 max-w-80'>Redefining your standard of living</p>
        <div className='flex flex-col md:flex-row gap-10 mt-10 items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Awards Won</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>
                    We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.We are the Great Builders. Our mission is to build the best homes for our clients. Our clients are our partners and we are committed to providing them with the best possible service.
                </p>
                <button className='bg-blue-900 text-white hover:border-blue-900 hover:border-1 px-6 py-2 rounded hover:bg-white hover:text-black transition-all duration-100'>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default About