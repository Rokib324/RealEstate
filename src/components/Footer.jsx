import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <img src={assets.logo} alt="Real Estate Logo" className='w-10 h-10 object-contain rounded-full' />
              <h3 className='text-xl font-bold'>RealEstate</h3>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Your trusted partner in finding the perfect home. We specialize in residential and commercial properties with exceptional service and expertise.
            </p>
            <div className='flex space-x-4'>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.23 0 3.948-2.606 3.948-6.362 0-3.329-2.399-5.592-5.823-5.592-3.963 0-6.296 2.901-6.296 5.912 0 1.146.434 2.379.978 3.044.109.131.125.245.085.368-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><a href="#Home" className='text-gray-300 hover:text-white transition-colors text-sm'>Home</a></li>
              <li><a href="#About" className='text-gray-300 hover:text-white transition-colors text-sm'>About Us</a></li>
              <li><a href="#Projects" className='text-gray-300 hover:text-white transition-colors text-sm'>Properties</a></li>
              <li><a href="#Testimonials" className='text-gray-300 hover:text-white transition-colors text-sm'>Testimonials</a></li>
              <li><a href="#Contact" className='text-gray-300 hover:text-white transition-colors text-sm'>Contact</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Our Services</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Residential Sales</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Commercial Properties</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Property Management</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Investment Properties</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Property Valuation</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Legal Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Contact Info</h4>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className='text-gray-300 text-sm'>123 Real Estate Ave</p>
                  <p className='text-gray-300 text-sm'>Downtown, City 12345</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-3'>
                <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className='text-gray-300 text-sm'>+1 (555) 123-4567</p>
                  <p className='text-gray-300 text-sm'>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-3'>
                <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className='text-gray-300 text-sm'>info@realestate.com</p>
                  <p className='text-gray-300 text-sm'>support@realestate.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className='mt-12 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Subscribe to Our Newsletter</h4>
              <p className='text-gray-300 text-sm'>Get the latest property updates and market insights</p>
            </div>
            <div className='flex w-full md:w-auto'>
              <input
                type="email"
                placeholder="Enter your email"
                className='px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 flex-1 md:w-64'
              />
              <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-r-lg font-medium'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-8 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>
              © 2025 RealEstate. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Privacy Policy</a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Terms of Service</a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Cookie Policy</a>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer