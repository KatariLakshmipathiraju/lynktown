import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Join() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [users, setUsers] = useState('vendor');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // Check if the email is valid
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post('/api/emails/join-now', {
        email,
        users,
      });

      // Process the form submission
      // ...

      // Reset the form
      setEmail('');
      setError('');
      router.push('/thankyou');
    } catch (error) {
      alert('Form submission failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = e => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  return (
    <div className='max-w-[1200px] w-[90%] bg-[#EEECEF] mx-auto mt-16  rounded-3xl overflow-hidden text-center'>
      <h1 className='text-base tracking-wide md:[word-spacing:3px] font-bold text-primaryColor m-6 md:m-14 md:text-3xl lg:text-4xl '>
        Join our email list, unlock the Secrets of <br /> Business growth!
      </h1>
      <div className='flex justify-center items-center m-6 gap-6'>
        <div className='flex items-center justify-center  gap-2'>
          <input
            type='radio'
            id='vendor'
            name='fav'
            value='vendor'
            onChange={e => {
              setUsers(e.target.value);
            }}
            className='w-4 h-4 md:h-5 md:w-5 accent-primaryColor'
            checked={users === 'vendor'}
          />
          <label
            htmlFor='vendor'
            className='text-[16px] md:text-[32px] font-semibold text-primaryColor'
          >
            Vendor
          </label>
        </div>

        <div className='flex items-center justify-center  gap-2'>
          <input
            type='radio'
            id='customer'
            name='fav'
            value='customer'
            className='w-4 h-4 md:h-5 md:w-5 accent-primaryColor'
            onChange={e => {
              setUsers(e.target.value);
            }}
            checked={users === 'customer'}
          />
          <label
            htmlFor='customer'
            className='text-[16px] md:text-[32px] font-semibold text-primaryColor'
          >
            Customer
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <div className="flex justify-center text-red-600 text-[1rem] md:text-lg">
          {error && <p>{error}</p>}
        </div> */}
        <div className='m-6 mb-14'>
          <input
            type='email'
            id='email'
            placeholder='Your Email Address'
            className='w-[55%] text-sm md:text-lg outline-none border border-primaryColor p-1.5 md:p-2.5 rounded-l-md'
            value={email}
            onChange={handleChange}
          />
          <button className='text-sm md:text-lg text-white font-medium p-[6.5px] md:p-[11px] md:px-4 rounded-r-md bg-primaryColor'>
            Join Now!
          </button>
        </div>
      </form>
    </div>
  );
}
