import React from 'react'

function ContactPage() {
  return (
    <div className='px-10 md:px-32 mb-10'>
      <h1 className='text-3xl md:text-5xl font-bold mb-10 mt-36'>Contact Here</h1>
      <div>
        <form action="" method="post">
            <div className='mb-5'>
                <label htmlFor="email" className='font-bold inline-block mb-2'>Your E-mail Address : </label> <br />
                <input type="email" name="email" placeholder='E-mail' className='w-full bg-transparent border-[0.5px] border-gray-500 py-1 px-2'/>
            </div>
            <div className='mb-5'>
            <label htmlFor="message" className='font-bold inline-block mb-2'>Message : </label> <br />
            <textarea name="message" rows={5} className='w-full bg-transparent border-[0.5px] border-gray-500 py-1 px-2' placeholder='Your message here...'></textarea>
            </div>
            <button type='submit' className='cursor-pointer px-6 py-2 bg-teal-800 hover:bg-teal-900 rounded-lg'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
