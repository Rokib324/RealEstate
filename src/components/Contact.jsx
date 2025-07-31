import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full' id='Contact'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-2 text-center'>Contact <span className='text-blue-800 underline underline-offset-4 decoration-1 underline-blue-900 font-light'>Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-2xl mx-auto'>We're here to help you find your dream home. Get in touch with us today!</p>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
                <div>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Get In Touch</h2>
                    <p className='text-gray-600 mb-8'>Ready to find your perfect home? Our team of real estate experts is here to help you every step of the way.</p>
                </div>

                <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='font-semibold text-gray-800'>Our Office</h3>
                            <p className='text-gray-600'>123 Real Estate Ave<br />Downtown, City 12345</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='font-semibold text-gray-800'>Phone</h3>
                            <p className='text-gray-600'>+1 (555) 123-4567</p>
                            <p className='text-gray-600'>+1 (555) 987-6543</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='font-semibold text-gray-800'>Email</h3>
                            <p className='text-gray-600'>info@realestate.com</p>
                            <p className='text-gray-600'>support@realestate.com</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='font-semibold text-gray-800'>Business Hours</h3>
                            <p className='text-gray-600'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className='text-gray-600'>Saturday: 10:00 AM - 4:00 PM</p>
                            <p className='text-gray-600'>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Send us a Message</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className='block text-sm font-medium text-gray-700 mb-2'>Subject *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                            >
                                <option value="">Select a subject</option>
                                <option value="property-inquiry">Property Inquiry</option>
                                <option value="viewing-request">Viewing Request</option>
                                <option value="general-question">General Question</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="5"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                            placeholder="Tell us about your requirements..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

        {/* Map Section */}
        <div className='mt-16'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>Find Our Office</h2>
            <div className='bg-gray-200 h-64 rounded-lg flex items-center justify-center'>
                <div className='text-center'>
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className='text-gray-600'>Interactive Map Coming Soon</p>
                    <p className='text-sm text-gray-500 mt-2'>123 Real Estate Ave, Downtown, City 12345</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact