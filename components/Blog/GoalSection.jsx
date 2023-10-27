import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import HeaderSection from './HeaderSection';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loading from '../Loading';
const GoalSection = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [reload, setReload] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    // Check if the email is valid
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post('/api/emails/join-now', {
        email,
        users: 'vendor',
      });

      // Process the form submission
      // ...

      // Reset the form
      setEmail('');
      setError('');
      router.push(`/thankyou?subscription=true&role=vendor`);
    } catch (error) {
      console.log(
        '🚀 ~ file: GoalSection.jsx:54 ~ handleSubmit ~ error:',
        error
      );
      alert('Form submission failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  const modal = () => {
    return (
      <Modal
        title={'Subscribe'}
        _isOpen={isOpen}
        content={
          <div
            style={{
              top: '50%',
              left: '50%',
              padding: 35,
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'space-between',
              width: 400,
              zIndex: 1001,
            }}
          >
            <p style={{ fontSize: 11, marginTop: 5, marginBottom: 10 }}>
              Join our email list, unlock the Secrets of Business growth!
            </p>
            <input
              style={{
                borderRadius: 5,
                border: 1,
                borderStyle: 'solid',
                borderColor: 'black',
                marginBottom: 15,
                height: 40,
                padding: 10,
                fontSize: 12,
              }}
              value={email}
              onChange={text => setEmail(text.target.value)}
              placeholder='Enter Email'
              required
            />
            {error && <p className='text-xs pt-2 text-red-500'>{error}</p>}
          </div>
        }
        onConfirm={() => {
          handleSubmit();
          // if (!email) return;
          // setReload(true);
          // if (email) {
          //   fetch('https://api.lynktown.in/api/subscribe', {
          //     method: 'post',
          //     headers: { 'content-type': 'application/json' },
          //     body: JSON.stringify({
          //       email,
          //     }),
          //   })
          //     .then(res => res.json())
          //     .then(async data => {
          //       setReload(false);
          //       if (data.code === 1) {
          //         setIsOpen(false);
          //         setIsSuccessOpen(true);
          //       } else if (data.code === 0) {
          //         setIsErrorOpen(true);
          //         setIsOpen(false);
          //         openError('Password is wrong');
          //       }
          //     })
          //     .catch(error => {
          //       setReload(false);
          //       setIsOpen(false);
          //       openError('An error occurred');
          //     });
          // } else {
          //   setReload(false);
          //   setIsOpen(false);
          //   openError('Email is required');
          // }
        }}
        onDiscard={() => {
          setIsOpen(false);
          document.documentElement.style.overflow = 'auto';
        }}
        buttons={[
          {
            role: 'Cancel Q',
            toClose: true,
            classes:
              'bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200',
            label: 'Cancel',
          },
          {
            role: 'confirm',
            toClose: false,
            classes:
              'bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-white',
            label: 'Confirm',
          },
        ]}
      ></Modal>
    );
  };
  const openThank = () => {
    return (
      <Modal
        title={'Thank You'}
        style={{
          top: '50%',
          left: '50%',
          padding: 35,
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between',
          width: 400,
          zIndex: 1001,
        }}
        onDiscard={() => {
          setIsSuccessOpen(false);
          document.documentElement.style.overflow = 'auto';
        }}
        buttons={[
          {
            role: 'Cancel Q',
            toClose: true,
            classes:
              'bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200',
            label: 'Close',
          },
        ]}
        _isOpen={isSuccessOpen}
        content={
          <p style={{ padding: 25 }}>Thank you very much for subscription.</p>
        }
      ></Modal>
    );
  };
  const openError = error => {
    return (
      <Modal
        style={{
          top: '50%',
          left: '50%',
          padding: 35,
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between',
          width: 400,
          zIndex: 1001,
        }}
        title={"Try again :'("}
        _isOpen={isErrorOpen}
        onDiscard={() => {
          setIsErrorOpen(false);
          document.documentElement.style.overflow = 'auto';
        }}
        buttons={[
          {
            role: 'Cancel Q',
            toClose: true,
            classes:
              'bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200',
            label: 'Close',
          },
        ]}
        content={
          <p style={{ padding: 25 }}>
            Some information was missing <br></br> Check your credentials and
            re-try
          </p>
        }
      ></Modal>
    );
  };
  return (
    <>
      {isLoading && <Loading />}

      <div className='px-2.5 md:px-4 bg-[#EDEDED]'>
        {/* {reload ? (
          <div
            style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              position: 'fixed',
              zIndex: 10000,
              backgroundColor: '#ffffff91',
            }}
          >
            <img
              style={{ height: 300 }}
              src='https://api.lynktown.in/public/blogs/output-onlinegiftools.gif'
            />
          </div>
        ) : (
          <p></p>
        )} */}
        {isOpen ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            {' '}
            {modal()}{' '}
          </div>
        ) : (
          <p></p>
        )}
        {isSuccessOpen ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            {' '}
            {openThank()}{' '}
          </div>
        ) : (
          ''
        )}
        {isErrorOpen ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            {' '}
            {openError()}{' '}
          </div>
        ) : null}
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex flex-wrap px-5 md:flex-nowrap items-center'>
            <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left text-center md:pr-10 mb-10 md:mb-0'>
              <h1 className='text-[#313131] text-[20px] md:text-[48px] md:h-[64px] leading-[32px] md:leading-[64px] text-left font-sans-serif font-semibold not-italic  max-w-[680px]'>
                Join Our Tribe: Subscribe for Exciting Content!
              </h1>
              <br></br>
              <button
                className='lg:mt-20 md:mt-40 w-64 h-10 rounded bg-[#857250]'
                onClick={handleFormSubmit}
              >
                <h4 className='text-white '>Subscribe</h4>
              </button>
            </div>

            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-full md:mt-0 mt-4'>
              {/* <Image
                className="object-cover object-center rounded"
                alt="goal"
                src="/undraw_working.png"
                width={629.99}
                height={403.12}
                priority
              /> */}
              <img src='bannerImage.png' alt='undraw_working' />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoalSection;
