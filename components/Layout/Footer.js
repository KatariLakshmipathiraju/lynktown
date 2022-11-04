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
                width='92'
                height='116'
                viewBox='0 0 92 116'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M45.4252 100.762H88.3966'
                  stroke='white'
                  strokeWidth='1.86731'
                  strokeMiterlimit='10'
                  sstrokeLinecap='round'
                />
                <path
                  d='M2.84961 111.827C4.62774 113.901 7.19614 115.186 9.96212 115.186H81.5812C84.2484 115.186 86.9156 114 88.6937 111.827C90.4719 109.752 91.3609 106.888 91.0646 104.122L83.3594 32.8978C83.2606 31.7124 82.2727 30.8233 81.0873 30.8233H65.4793V21.6363C65.4793 10.276 56.6874 0.990234 45.8211 0.990234C34.9547 0.990234 26.0641 10.1772 26.0641 21.5375V30.7245H10.456C9.27063 30.7245 8.28278 31.6136 8.18399 32.799L0.478767 104.023C0.182412 106.888 1.07148 109.752 2.84961 111.827ZM30.6082 21.5375C30.6082 12.8444 37.4243 5.73191 45.7223 5.73191C54.119 5.73191 60.8364 12.8444 60.8364 21.5375V30.7245H30.6082V21.5375ZM87.212 103.331L87.4095 105.406C87.6071 106.888 87.1132 108.369 86.1253 109.555C85.1375 110.74 83.8533 111.333 82.3715 111.333H9.07306C7.59128 111.333 6.30708 110.74 5.31923 109.555C4.33138 108.369 3.93624 106.986 4.03503 105.406L11.6415 34.6759H25.5701V51.0742C25.5701 52.4572 26.6568 53.5438 27.941 53.5438C29.2252 53.5438 30.3118 52.4572 30.3118 51.0742V34.6759H61.3303V51.0742C61.3303 52.4572 62.4169 53.5438 63.7011 53.5438C64.9854 53.5438 66.072 52.4572 66.072 51.0742V34.6759H80.0007L86.9156 98.491L87.212 103.331Z'
                  fill='white'
                  stroke='#6A5B40'
                  strokeWidth='0.666898'
                  strokeMiterlimit='10'
                />
                <path
                  d='M63.9854 89.4005C62.2073 91.1786 59.8365 92.0677 57.3669 92.0677C54.8972 91.9689 52.5264 90.981 50.847 89.1041L47.6859 85.6467C45.3151 83.0782 44.6236 79.6208 45.5127 76.3609L51.0446 82.288L52.724 83.9673L54.3045 85.6467C56.0826 87.5236 59.0462 87.6223 60.9231 85.8442C61.3183 85.3503 61.7134 84.9552 62.0097 84.3624C62.2073 83.7697 62.4049 83.177 62.4049 82.5843C62.4049 81.9916 62.3061 81.3001 62.1085 80.7074C61.911 80.1147 61.5158 79.6208 61.1207 79.1268L59.5401 77.3487L52.4276 69.6435C55.5887 68.952 58.9474 69.7423 61.3183 72.3107L64.5782 75.7682C66.2575 77.6451 67.2454 80.1147 67.1466 82.5843C66.8502 85.2515 65.7636 87.6224 63.9854 89.4005ZM41.3637 68.5568L52.6252 80.7074C53.5142 81.6953 54.996 81.6952 55.8851 80.8062C56.7741 79.8183 56.7741 78.3366 55.9839 77.4475L44.7224 65.2969C43.8333 64.3091 42.3515 64.3091 41.4625 65.1982C40.5734 66.0872 40.5734 67.6678 41.3637 68.5568ZM36.5232 66.7787L45.3151 76.1633C42.154 76.9536 38.7953 76.0645 36.4244 73.4961L33.1645 70.0386C31.4852 68.1617 30.4973 65.6921 30.5961 63.2225C30.6949 60.6541 31.6828 58.2832 33.4609 56.5051C35.239 54.727 37.6099 53.8379 40.0795 53.8379C42.5491 53.9367 44.9199 54.9245 46.5993 56.8014L49.7604 60.2589C52.1313 62.8273 52.8227 66.2848 51.9337 69.5447L43.1418 60.1601C41.3637 58.1844 38.4001 58.1844 36.5232 59.9626C34.8439 61.8395 34.7451 64.803 36.5232 66.7787Z'
                  fill='white'
                />
                <path
                  d='M29.566 103.137H35.1967C36.4809 103.137 37.4688 102.051 37.4688 100.766C37.4688 99.4821 36.4809 98.3955 35.1967 98.3955H29.566C28.2818 98.3955 27.2939 99.4821 27.2939 100.766C27.2939 102.149 28.3806 103.137 29.566 103.137Z'
                  fill='white'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-center md:text-left text-lg md:text-2xl text-primaryColor'>
                About LynkTown
              </h1>
              <p className='text-left py-4 text-base text-[#3B3B3B] leading-[30px]'>
                We are a digital platform helping to build an ecosystem that
                seamlessly connects creatives, business owners, supplires,
                customers, trading partners, to collaborate, grow businesses and
                give the customers the best possible experience.
              </p>
            </div>
          </div>
          {/* <div className='flex gap-5 sm:hidden  my-4 justify-center  flex-wrap '>
            <button className='w-[156.85px] h-[46px] sm:w-auto sm:h-auto'>
              <img src={google.src} alt='' />
            </button>
            <button className='w-[156.85px] h-[46px] sm:w-auto sm:h-auto'>
              <img src={apple.src} alt='' />
            </button>
          </div> */}
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
                  33 1 ST MAIN 2 A CROSS SRINIVASA NAGAR BSK I ST BANGALORE URB
                  BANGALORE Bangalore-560050 Karnataka
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
                href='https://www.instagram.com/lynktown'
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
            <h3>Copyright © 2022 LynkTown</h3>
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
