import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from 'react-responsive-modal';

const RedirectModal = ({ isModalOpen, setIsModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (!isModalOpen) return;
    setTimer(3);
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isModalOpen]);

  useEffect(() => {
    if (timer === 0) {
      window.open('https://app.lynktown.com/', '_blank');
      setIsModalOpen(false);
      // window.location.href = 'https://app.lynktown.com/';
    }
  }, [timer]);

  return (
    <Modal
      open={isModalOpen}
      onClose={() => {}}
      classNames='redirect-modal'
      styles={{
        modal: {
          maxWidth: '70vw',
          width: '100%',
        },
      }}
    >
      <section className=' w-full'>
        <div className='py-5 mt-4'>
          <h1 className='font-medium text-xl md:text-2xl'>
            Redirecting to Hauteze... in {timer}s
          </h1>
          <p className=' text-sm md:text-base '>
            A platform where you can buy designer clothes directly from the
            designers at affordable rates
          </p>
        </div>

        <div className='flex items-center max-w-7xl w-full'>
          <Image
            src={'/assets/images/redirect/web.png'}
            alt='Web'
            width={100}
            height={100}
            className='w-full h-full hidden lg:block flex-1'
          />
          <Image
            src={'/assets/images/redirect/mobile.svg'}
            alt='Web'
            width={100}
            height={100}
            style={{
              boxShadow: `0px 4px 16px 0px rgba(0, 0, 0, 0.25)`,
            }}
            className='w-[70%] sm:w-[40%] flex items-center justify-center mx-auto lg:flex-[0.28]'
          />
        </div>
      </section>
    </Modal>
  );
};

export default RedirectModal;
