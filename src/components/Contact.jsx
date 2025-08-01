import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dad6136f-7735-44e6-a2fd-6a9d60b84253");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-2 text-center'>Conatact <span className='text-blue-800 underline underline-offset-4 decoration-1 underline-blue-900 font-light'>Us</span></h1>
        <p className='text-center text-gray-500 mb-10 max-w-80 mx-auto'> reach us anytime , Just send us a message</p>

        <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
            <div className='flex flex-col sm:flex-row gap-8'>
                <div className='w-full sm:w-1/2'>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                    <input type="text" id='name' name='name' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div className='w-full sm:w-1/2'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                    <input type="email" id='email' name='email' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                <textarea id='message' name='message' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            <button type='submit' className='bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300'>{result ? result : "Send Message"}</button>
        </form>
        </motion.div>

  )
}

export default Contact