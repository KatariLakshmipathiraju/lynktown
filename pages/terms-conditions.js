import React from 'react';
import Layout from '../components/Layout/Layout';

const TermsNConditionPoints = [
  {
    id: 1,
    point: (
      <>
        To access our services, you must create an account. Ensure that the
        information you provide is accurate and up-to-date. You are responsible
        for maintaining the security of your account information and will be
        liable for any actions taken through your account.
      </>
    ),
  },
  {
    id: 2,
    point: (
      <>
        LynkTown collects and processes personal data as described in our
        Privacy Policy. By using our services, you consent to our data
        practices.
      </>
    ),
  },
  {
    id: 3,
    point: (
      <>
        We strive to provide accurate shipping information, but delivery times
        may vary. LynkTown is not responsible for any shipping delays or issues
        caused by third-party delivery services.
      </>
    ),
  },
  {
    id: 4,
    point: (
      <>
        Refer to our Returns and Refunds Policy for details on how to return
        products and seek refunds.
      </>
    ),
  },
  {
    id: 5,
    point: (
      <>
        The purchase of products through the platform is governed by specific
        sale policies, including cancellation, exchange, and return policies.
        Users must confirm that the returned product is unused with original
        tags intact. LynkTown assumes no liability for used, damaged, or
        tag-less products.
      </>
    ),
  },

  {
    id: 6,
    point: (
      <>
        LynkTown does not guarantee the accuracy, completeness, reliability, or
        error-free nature of product descriptions or other content on the
        platform. We assume no liability in this regard.
      </>
    ),
  },
  {
    id: 7,
    point: (
      <>
        LynkTown is not responsible for any non-performance or breach of
        contracts between buyers and sellers. Our platform serves as a
        marketplace for users to buy and sell products or services.
      </>
    ),
  },
  {
    id: 8,
    point: (
      <>
        Pricing displayed on the platform may be subject to technical issues or
        typographical errors. Sellers may cancel orders in such cases.
      </>
    ),
  },
  {
    id: 9,
    point: (
      <>
        All commercial terms, including price, shipping cost, date, period,
        warranties, and after-sales services, are agreed upon solely between the
        buyer and seller. LynkTown does not control or influence these terms.
      </>
    ),
  },
  {
    id: 10,
    point: (
      <>
        Products can be purchased through the platform using the escrow payment
        method. The sale/purchase of products is additionally governed by
        specific sale policies, including cancellation, exchange, and return
        policies, which can be found in the FAQ section on the platform. It is
        essential for users to confirm that the product being returned is unused
        and has its original tags intact when creating a return request. If the
        product is used, damaged, or missing original tags, the return request
        will be declined, and the product will be re-shipped to the customer.
        LynkTown assumes no liability in such cases. These terms and conditions
        may also be supplemented by product-specific conditions displayed with
        the product.
      </>
    ),
  },
];

const TermsNCondition = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Terms & Condition
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12 p-4 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className=' text-sm md:text-base'>
                Before using LynkTown, please carefully review and understand
                the following terms and conditions. Your use of our services
                signifies your agreement to abide by these terms. If you do not
                agree with these terms, kindly refrain from using our services.
              </h4>
            </div>
            <div className='mt-6'>
              <h1 className='underline text-lg font-bold '>
                Following are the terms and conditions you should know:
              </h1>
              <ul className='list-disc ml-7'>
                {TermsNConditionPoints.map(item => {
                  const { id, point } = item;
                  return (
                    <li key={id} className='my-6'>
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsNCondition;
