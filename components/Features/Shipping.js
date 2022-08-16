import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MeasurementImg from '/public/assets/images/features/shipping.png';

const Shipping = ({ currentTab }) => {
  return (
    <AnimatePresence>
      {currentTab === 'shippingAndTracking' && (
        <motion.div
          key='shippingAndTracking'
          className='grid lg:grid-cols-[65%_35%] gap-8 lg:gap-10 items-center h-[900px] lg:h-[500px] xl:h-[560px] '
        >
          <div className='order-2 lg:order-[-1]'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='text-lg font-medium md:text-xl lg:text-3xl text-[#333]'
            >
              Ship orders with our vendors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='my-5 md:my-10 leading-[28.61px] text-sm md:text-base text-[#757575]'
            >
              Get your orders shipped to your customers with the help of our
              vendors who ship throughout India.
            </motion.p>
            <div className='flex justify-center md:justify-start'>
              <button className='bg-primaryColor rounded-[12px] max-w-[212px] h-[45px] w-full md:h-[61px] text-white'>
                Download App
              </button>
            </div>
          </div>
          <div>
            <div className='relative'>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='lg:max-w-[500] max-w-[292px] max-h-[292px] lg:max-h-[500px] mx-auto 2xl:w-[373px] 2xl:h-[373px]'
                viewBox='0 0 373 373'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='186.5' cy='186.5' r='186.5' fill='#EEECE7' />
              </motion.svg>
              <div className='absolute top-2/4 left-2/4 translate-x-[-50%]   translate-y-[-50%]'>
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    ease: 'easeIn',
                  }}
                  src={MeasurementImg.src}
                  alt=''
                  className='origin-bottom w-full h-full min-w-[180px] max-w-[203.14px] min-h-[350.58px]  max-h-[439px] lg:min-h-[350.16px] xl:min-h-[466.16px] lg:min-w-[215.43px]'
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Shipping;
