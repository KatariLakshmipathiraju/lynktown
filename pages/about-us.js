import React from 'react';
import Layout from '../components/Layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            About Us
          </h1>
        </header>
        <div className='px-4'>
          <div
            className=' flex items-center flex-col md:flex-row  gap-5 rounded-[19px]  p-4 md:p-8 bg-white  max-w-[977.5px] w-full mt-[-120px]     mx-auto relative'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
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
            <div className='bg-primaryColor rounded-full  min-w-[150px] min-h-[150px]  lg:min-w-[171px] lg:h-[171px] grid place-items-center'>
              <svg
                width='70'
                height='88'
                viewBox='0 0 70 88'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M34.6152 76.0132H66.8327'
                  stroke='white'
                  strokeWidth='1.4'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                />
                <path
                  d='M2.69462 84.3087C4.02775 85.864 5.95339 86.8268 8.02715 86.8268H61.7228C63.7225 86.8268 65.7222 85.9381 67.0554 84.3087C68.3885 82.7533 69.0551 80.6055 68.8329 78.5318L63.056 25.1323C62.9819 24.2436 62.2413 23.577 61.3525 23.577H49.6506V16.6891C49.6506 8.17189 43.059 1.20996 34.912 1.20996C26.7651 1.20996 20.0994 8.09782 20.0994 16.6151V23.5029H8.39747C7.50871 23.5029 6.76808 24.1695 6.69402 25.0583L0.917105 78.4577C0.694916 80.6055 1.36148 82.7533 2.69462 84.3087ZM23.5063 16.6151C23.5063 10.0975 28.6167 4.76499 34.838 4.76499C41.1333 4.76499 46.1696 10.0975 46.1696 16.6151V23.5029H23.5063V16.6151ZM65.9444 77.9392L66.0926 79.4946C66.2407 80.6055 65.8704 81.7165 65.1297 82.6052C64.3891 83.494 63.4263 83.9384 62.3153 83.9384H7.36059C6.24964 83.9384 5.28682 83.494 4.54619 82.6052C3.80556 81.7165 3.50931 80.6796 3.58337 79.4946L9.28623 26.4655H19.7291V38.7599C19.7291 39.7968 20.5438 40.6115 21.5066 40.6115C22.4694 40.6115 23.2841 39.7968 23.2841 38.7599V26.4655H46.5399V38.7599C46.5399 39.7968 47.3546 40.6115 48.3174 40.6115C49.2803 40.6115 50.0949 39.7968 50.0949 38.7599V26.4655H60.5378L65.7223 74.3102L65.9444 77.9392Z'
                  fill='white'
                  stroke='#6A5B40'
                  strokeWidth='0.5'
                  strokeMiterlimit='10'
                />
                <path
                  d='M48.5306 67.4947C47.1974 68.8279 45.4199 69.4944 43.5683 69.4944C41.7168 69.4204 39.9393 68.6797 38.6802 67.2725L36.3102 64.6803C34.5327 62.7547 34.0142 60.1625 34.6808 57.7184L38.8283 62.1622L40.0874 63.4213L41.2724 64.6803C42.6055 66.0875 44.8274 66.1616 46.2346 64.8285C46.5309 64.4581 46.8271 64.1619 47.0493 63.7175C47.1974 63.2731 47.3456 62.8288 47.3456 62.3844C47.3456 61.94 47.2715 61.4216 47.1234 60.9772C46.9752 60.5328 46.679 60.1625 46.3827 59.7922L45.1977 58.459L39.8652 52.6821C42.2352 52.1637 44.7534 52.7562 46.5309 54.6818L48.9749 57.274C50.234 58.6812 50.9746 60.5328 50.9006 62.3844C50.6784 64.3841 49.8637 66.1616 48.5306 67.4947ZM31.5701 51.8674L40.0133 60.9772C40.6799 61.7178 41.7908 61.7178 42.4574 61.0512C43.124 60.3106 43.124 59.1997 42.5315 58.5331L34.0883 49.4233C33.4217 48.6827 32.3108 48.6827 31.6442 49.3493C30.9776 50.0158 30.9776 51.2009 31.5701 51.8674ZM27.941 50.5343L34.5327 57.5703C32.1626 58.1628 29.6445 57.4962 27.867 55.5706L25.4229 52.9784C24.1638 51.5712 23.4232 49.7196 23.4973 47.868C23.5713 45.9424 24.312 44.1649 25.6451 42.8317C26.9782 41.4986 28.7557 40.832 30.6073 40.832C32.4589 40.9061 34.2364 41.6467 35.4955 43.0539L37.8655 45.6461C39.643 47.5718 40.1614 50.164 39.4949 52.6081L32.9033 45.5721C31.5701 44.0908 29.3482 44.0908 27.941 45.4239C26.682 46.8311 26.6079 49.053 27.941 50.5343Z'
                  fill='white'
                />
                <path
                  d='M22.7249 77.7938H26.9465C27.9093 77.7938 28.65 76.9791 28.65 76.0163C28.65 75.0535 27.9093 74.2388 26.9465 74.2388H22.7249C21.7621 74.2388 21.0215 75.0535 21.0215 76.0163C21.0215 77.0532 21.8362 77.7938 22.7249 77.7938Z'
                  fill='white'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-center md:text-left text-lg md:text-2xl text-primaryColor'>
                About Lynk Town
              </h1>
              <p className='text-left py-4 text-base text-[#3B3B3B] leading-[30px]'>
                We are a digital platform helping to build an ecosystem that
                seamlessly connects creatives, business owners, supplires,
                customers, trading partners, to collaborate, grow businesses and
                give the customers the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
