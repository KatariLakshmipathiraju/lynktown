import React from 'react';
import google from '/public/assets/images/google.png';
import apple from '/public/assets/images/apple.png';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';
import { ImLinkedin2, ImYoutube } from 'react-icons/im';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-primaryColor  pt-16'>
      <div className='container  mx-auto'>
        <div className='grid xl:grid-cols-[850px_1fr_1fr]  xl:justify-items-center gap-4 sm:gap-11'>
          <div className='bg-white flex-col md:flex-row rounded-[20px] relative p-6 gap-10 flex items-center'>
            <div className='absolute top-[-15px] md:top-[-25px] shadow-lg right-[-8px]  md:right-[-15px] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-full grid place-items-center'>
              <svg
                className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'
                viewBox='0 0 21 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.9611 20.1527C17.9835 21.1304 16.6799 21.6192 15.3221 21.6192C13.9643 21.5649 12.6608 21.0217 11.7375 19.9898L9.99946 18.0888C8.69595 16.6767 8.31576 14.7758 8.80458 12.9834L11.8461 16.2422L12.7694 17.1655L13.6384 18.0888C14.6161 19.1208 16.2454 19.1751 17.2774 18.1975C17.4946 17.9259 17.7119 17.7087 17.8748 17.3828C17.9835 17.0569 18.0921 16.731 18.0921 16.4051C18.0921 16.0793 18.0378 15.6991 17.9291 15.3732C17.8205 15.0473 17.6033 14.7758 17.386 14.5042L16.517 13.5266L12.6065 9.29016C14.3445 8.90997 16.1911 9.34447 17.4946 10.7566L19.287 12.6576C20.2103 13.6895 20.7534 15.0473 20.6991 16.4051C20.5362 17.8716 19.9387 19.1751 18.9611 20.1527ZM6.52344 8.69272L12.7151 15.3732C13.2039 15.9163 14.0186 15.9163 14.5074 15.4275C14.9962 14.8844 14.9962 14.0697 14.5617 13.5809L8.37008 6.90039C7.88126 6.35726 7.06657 6.35727 6.57775 6.84608C6.08893 7.3349 6.08894 8.2039 6.52344 8.69272ZM3.86211 7.71509L8.69595 12.8748C6.95794 13.3093 5.1113 12.8205 3.80779 11.4084L2.01547 9.50741C1.09215 8.47546 0.54902 7.11764 0.603333 5.75982C0.657646 4.34769 1.20078 3.04418 2.17841 2.06655C3.15604 1.08891 4.45955 0.600098 5.81737 0.600098C7.17519 0.654411 8.4787 1.19754 9.40202 2.22948L11.14 4.13044C12.4435 5.54257 12.8237 7.44352 12.3349 9.23585L7.50107 4.07612C6.52344 2.98987 4.89405 2.98987 3.86211 3.9675C2.93879 4.99944 2.88447 6.62883 3.86211 7.71509Z'
                  fill='#6A5B40'
                />
              </svg>
            </div>
            <div className='bg-primaryColor rounded-full  min-w-[150px] min-h-[150px]  lg:min-w-[171px] lg:h-[171px] grid place-items-center  '>
              <svg
                width='70'
                height='87'
                viewBox='0 0 70 87'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M34.7402 75.8032H66.9577'
                  stroke='#6A5B40'
                  strokeWidth='1.4'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                />
                <path
                  d='M2.81962 84.0987C4.15275 85.654 6.07839 86.6169 8.15215 86.6169H61.8478C63.8475 86.6169 65.8472 85.7281 67.1804 84.0987C68.5135 82.5434 69.1801 80.3956 68.9579 78.3218L63.181 24.9224C63.1069 24.0336 62.3663 23.367 61.4775 23.367H49.7756V16.4792C49.7756 7.96193 43.184 1 35.037 1C26.8901 1 20.2244 7.88786 20.2244 16.4051V23.293H8.52247C7.63371 23.293 6.89308 23.9595 6.81902 24.8483L1.0421 78.2477C0.819916 80.3956 1.48648 82.5434 2.81962 84.0987ZM23.6313 16.4051C23.6313 9.88756 28.7417 4.55502 34.963 4.55502C41.2583 4.55502 46.2946 9.88756 46.2946 16.4051V23.293H23.6313V16.4051ZM66.0694 77.7293L66.2176 79.2846C66.3657 80.3956 65.9954 81.5065 65.2547 82.3953C64.5141 83.284 63.5513 83.7284 62.4403 83.7284H7.48559C6.37464 83.7284 5.41182 83.284 4.67119 82.3953C3.93056 81.5065 3.63431 80.4696 3.70837 79.2846L9.41123 26.2555H19.8541V38.55C19.8541 39.5868 20.6688 40.4015 21.6316 40.4015C22.5944 40.4015 23.4091 39.5868 23.4091 38.55V26.2555H46.6649V38.55C46.6649 39.5868 47.4796 40.4015 48.4424 40.4015C49.4053 40.4015 50.2199 39.5868 50.2199 38.55V26.2555H60.6628L65.8473 74.1002L66.0694 77.7293Z'
                  fill='white'
                  stroke='#6A5B40'
                  strokeWidth='0.5'
                  strokeMiterlimit='10'
                />
                <path
                  d='M48.6556 67.2848C47.3224 68.6179 45.5449 69.2845 43.6933 69.2845C41.8418 69.2104 40.0643 68.4698 38.8052 67.0626L36.4352 64.4704C34.6577 62.5447 34.1392 59.9525 34.8058 57.5084L38.9533 61.9522L40.2124 63.2113L41.3974 64.4704C42.7305 65.8776 44.9524 65.9516 46.3596 64.6185C46.6559 64.2482 46.9521 63.9519 47.1743 63.5075C47.3224 63.0632 47.4706 62.6188 47.4706 62.1744C47.4706 61.73 47.3965 61.2116 47.2484 60.7672C47.1002 60.3228 46.804 59.9525 46.5077 59.5822L45.3227 58.2491L39.9902 52.4722C42.3602 51.9537 44.8784 52.5462 46.6559 54.4719L49.0999 57.0641C50.359 58.4713 51.0996 60.3228 51.0256 62.1744C50.8034 64.1741 49.9887 65.9516 48.6556 67.2848ZM31.6951 51.6575L40.1383 60.7672C40.8049 61.5078 41.9158 61.5078 42.5824 60.8413C43.249 60.1006 43.249 58.9897 42.6565 58.3231L34.2133 49.2134C33.5467 48.4728 32.4358 48.4728 31.7692 49.1393C31.1026 49.8059 31.1026 50.9909 31.6951 51.6575ZM28.066 50.3243L34.6577 57.3603C32.2876 57.9528 29.7695 57.2862 27.992 55.3606L25.5479 52.7684C24.2888 51.3612 23.5482 49.5096 23.6223 47.6581C23.6963 45.7324 24.437 43.9549 25.7701 42.6218C27.1032 41.2886 28.8807 40.6221 30.7323 40.6221C32.5839 40.6961 34.3614 41.4368 35.6205 42.844L37.9905 45.4362C39.768 47.3618 40.2864 49.954 39.6199 52.3981L33.0283 45.3621C31.6951 43.8808 29.4732 43.8808 28.066 45.214C26.807 46.6212 26.7329 48.8431 28.066 50.3243Z'
                  fill='white'
                />
                <path
                  d='M22.8499 77.5838H27.0715C28.0343 77.5838 28.775 76.7691 28.775 75.8063C28.775 74.8435 28.0343 74.0288 27.0715 74.0288H22.8499C21.8871 74.0288 21.1465 74.8435 21.1465 75.8063C21.1465 76.8432 21.9612 77.5838 22.8499 77.5838Z'
                  fill='white'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-center md:text-left text-lg md:text-2xl text-primaryColor'>
                About Lynk Town
              </h1>
              <p className='text-center md:text-left py-4 text-base text-[#3B3B3B] leading-[30px]'>
                We are a digital platform helping to build an ecosystem that
                seamlessly connects creatives, business owners, supplires,
                customers, trading partners, to collaborate, grow businesses and
                give the customers the best possible experience.
              </p>
            </div>
          </div>
          <div className='flex gap-5 sm:hidden  my-4 justify-center  flex-wrap '>
            <button className='w-[156.85px] h-[46px] sm:w-auto sm:h-auto'>
              <img src={google.src} alt='' />
            </button>
            <button className='w-[156.85px] h-[46px] sm:w-auto sm:h-auto'>
              <img src={apple.src} alt='' />
            </button>
          </div>
          <div className='text-white'>
            <h1 className='font-semibold text-lg'>Company</h1>
            <ul className='flex flex-col gap-4 my-6'>
              <li className='flex items-center gap-3'>
                <Link href='/about-us'>About us</Link>
              </li>
              <li className='flex items-center gap-3'>
                <Link href='/contact-us'>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className='text-white'>
            <h1 className='font-semibold text-lg'>Contact us</h1>
            <ul className='flex flex-col gap-4 my-6'>
              <li className='flex items-center gap-3'>
                <HiOutlineMail className='text-xl' />
                <a href='mailto:lynktown@gmail.com'>lynktown@gmail.com</a>
              </li>
              <li className='flex items-center gap-3'>
                <HiOutlinePhone className='text-xl' />
                <p>+91 96635 24882</p>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineLocationMarker className='!text-xl min-w-[20px]' />
                <p>
                  224, Bannerghatta Main Rd, near Arekere Main Road, Omkar
                  Nagar, Bilekahalli, Bengaluru, Karnataka 560076
                </p>
              </li>
            </ul>
            <div className='flex gap-5 items-center'>
              <a
                href='http://www.facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                <RiFacebookFill className='text-xl' />
              </a>
              <a href='http://www.twitter.com' target='_blank' rel='noreferrer'>
                <RiTwitterFill className='text-xl' />
              </a>
              <a
                href='http://www.instagram.com'
                target='_blank'
                rel='noreferrer'
              >
                <RiInstagramFill className='text-xl' />
              </a>
              <a
                href='http://www.linkedin.com'
                target='_blank'
                rel='noreferrer'
              >
                <ImLinkedin2 className='text-xl' />
              </a>
              <a href='http://www.youtube.com' target='_blank' rel='noreferrer'>
                <ImYoutube className='text-xl' />
              </a>
            </div>
          </div>
        </div>
        <div className=' hidden sm:flex gap-5 my-8 mb-10  items-center flex-wrap '>
          <button className='w-[186.5px]'>
            <img src={google.src} alt='' />
          </button>
          <button className='w-[186.5px]'>
            <img src={apple.src} alt='' />
          </button>
        </div>
        <div className='my-6   flex-col flex xl:hidden text-white text-sm   mx-auto gap-y-4'>
          <h3>All Rights Reserved </h3>
          <Link href='/terms-conditions'>
            <span className='underline cursor-pointer'>
              Terms & Conditions |
            </span>
          </Link>
          <Link href='/cancellation'>
            <span className='underline cursor-pointer'>Cancellation |</span>
          </Link>
          <Link href='/return-and-refund'>
            <span className='underline cursor-pointer'>Return & Refund |</span>
          </Link>
          <Link href='/shipping-and-delivery'>
            <span className='underline cursor-pointer'>
              Shipping & Delivery policy |
            </span>
          </Link>
          <Link href='/privacy-policy'>
            <span className='underline cursor-pointer'>Privacy Policy |</span>
          </Link>

          <button
            className='underline flex items-center gap-3'
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=919663524882',
                '_blank'
              )
            }
          >
            For support
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              className='w-[22.39px] h-[22.39px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path
                fill='#fff'
                d='M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z'
              />
              <path
                fill='#fff'
                d='M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z'
              />
              <path
                fill='#cfd8dc'
                d='M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z'
              />
              <path
                fill='#40c351'
                d='M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z'
              />
              <path
                fill='#fff'
                fillRule='evenodd'
                d='M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <hr />
        <div className='flex flex-col lg:flex-row items-center text-white py-5  justify-between'>
          <div>
            <h3>Copyright © 2022 Lynk Town</h3>
          </div>
          <div className='text-sm  hidden xl:flex gap-2 items-center'>
            <h3>All Rights Reserved |</h3>{' '}
            <Link href='/terms-conditions'>
              <span className='underline cursor-pointer'>
                Terms & Conditions
              </span>
            </Link>
            |
            <Link href='/cancellation'>
              <span className='underline cursor-pointer'>Cancellation</span>
            </Link>
            |
            <Link href='/return-and-refund'>
              <span className='underline cursor-pointer'>Return & Refund</span>
            </Link>
            |
            <Link href='/shipping-and-delivery'>
              <span className='underline cursor-pointer'>
                Shipping & Delivery policy |
              </span>
            </Link>
            |
            <Link href='/privacy-policy'>
              <span className='underline cursor-pointer'>Privacy Policy</span>
            </Link>
            |
            <button
              href=''
              className='underline flex items-center gap-3'
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=919663524882',
                  '_blank'
                )
              }
            >
              For support
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                className='w-[35px] h-[35px] md:w-[45px] md:h-[45px]'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path
                  fill='#fff'
                  d='M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z'
                />
                <path
                  fill='#fff'
                  d='M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z'
                />
                <path
                  fill='#cfd8dc'
                  d='M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z'
                />
                <path
                  fill='#40c351'
                  d='M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z'
                />
                <path
                  fill='#fff'
                  fillRule='evenodd'
                  d='M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
