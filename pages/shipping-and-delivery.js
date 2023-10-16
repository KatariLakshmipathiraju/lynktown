import React from 'react';
import Layout from '../components/Layout/Layout';

const ShoppingNDelivery = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Shipping & Delivery Policy
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12 px-4 py-8 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className=' text-sm md:text-base'>
                We, at LynkTown make all commercial and reasonable endeavors to
                ensure that Products are delivered to the Users in a timely
                fashion. Users are required to peruse and understand the terms
                contained in this Delivery Policy. If you do not agree then you
                are advised not to accept the Terms of Use and the Shipping and
                Delivery Policy and may abstain from using the Platforms. The
                terms contained in this Shipping and Delivery Policy shall be
                accepted without modification and accordingly, you agree to be
                bound by the terms contained herein.
              </h4>
            </div>
            <div className='my-5 text-sm sm:text-base'>
              <ul className='list-disc ml-5'>
                <li className='mb-4'>
                  All products are dispatched by verified vendors to the
                  shipping address provided by the user/customer within 2 to 3
                  working days.
                </li>
                <li className='mb-4'>
                  We partner with third-party courier services, specifically
                  Ship Rocket, for deliveries across India, with an estimated
                  delivery time of approximately 1 week.
                </li>
                <li className='mb-4'>
                  Users must provide a complete street address along with their
                  pin-code details when placing an orde
                </li>
                <li className='mb-4'>
                  Orders are processed on weekdays (Monday to Saturday),
                  excluding national or declared holidays.
                </li>
                <li className='mb-4'>
                  We ensure our vendors keep stock of all products they sell. If
                  a product is unavailable or delayed, we'll promptly inform the
                  buyer within 2 working days.
                </li>
                <li className='mb-4'>
                  Efforts will be made to ship all products together in case of
                  multiple items in one transaction. However, separate shipping
                  addresses will be treated as individual orders.
                </li>
                <li className='mb-4'>
                  We do not ship to Post Office Box addresses and are not
                  responsible for non-delivery to such addresses
                </li>
                <li className='mb-4'>
                  Our courier partners will attempt delivery three times at the
                  specified address. In case of non-delivery, our partners will
                  inform us.
                </li>
                <li className='mb-4'>
                  Upon order confirmation, users receive a tracking number via
                  email and SMS for order tracking through our shipping
                  partners.
                </li>
                <li className='mb-4'>
                  For delivery concerns, contact our courier partners' customer
                  service at 92666-23006 or email us at support@lynktown.com
                  with your order details for further queries or concerns.
                </li>
              </ul>
            </div>
            <h4 className=' text-sm md:text-base ml-5'>
              You can also mail us at{' '}
              <a href='mailto:support@lynktown.com'>support@lynktown.com</a>{' '}
              with your order details in case of further queries or concerns.
            </h4>

            {/* <div className='my-5 md:my-8 text-sm sm:text-base'>
              <h1 className=' text-lg font-bold '>Return Guidelines:</h1>
              <ol className='list-decimal ml-5 my-6'>
                <li className='mb-5'>
                  Your address and the product that you wish to return must be
                  eligible for a refund.
                </li>
                <li className='mb-5'>
                  Once the return is received, you will, in accordance with
                  LynkTown Refund Policy, be issued a refund to your original
                  payment method.
                </li>
                <li className='mb-5'>
                  When trying on products, please ensure that you are not
                  wearing perfume/aftershave or deodorant that may leave a scent
                  or marks on the item.
                </li>
                <li className='mb-5'>
                  All labels must be attached and intact when returning any
                  items to us. We will not accept the order return of products
                  where it is evident that these instructions are not being
                  followed.
                </li>
                <li className='mb-5'>
                  The returned product must be in its original packaging with
                  any enclosed returns/exchange documentation within 3 to 4
                  working days.
                </li>
                <li className='mb-5'>
                  Faulty returns must be sent back for inspection.
                </li>
              </ol>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingNDelivery;
