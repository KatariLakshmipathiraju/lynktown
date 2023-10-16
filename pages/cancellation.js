import React from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

export const cancellations = [
  {
    id: 1,
    question: 'How to Cancel an Order on LynkTown that has Been Shipped?',
    answer: (
      <>
        Once an order has been shipped, cancelling it directly is not possible.
        However, if you find yourself in a situation where you need to cancel
        such an order, here's what you need to know:
        <br />
        <ul className='list-disc'>
          <li>
            The seller will contact you to inform you that the product has
            already been shipped.
          </li>
          <li>
            Even though the order is in transit, you still have the option to
            request a refund for the item.
          </li>
        </ul>
        You can write to our customer support team on{' '}
        <a
          className='text-blue-500 font-medium'
          href='mailto:support@lynktown.com'
        >
          support@lynktown.com
        </a>{' '}
        or call us on{' '}
        <a className='text-blue-500 font-medium' href='tel:+91 96639 89996'>
          +91 96639 89996
        </a>
      </>
    ),
  },
  {
    id: 2,
    question:
      ' You can cancel your order before the processing i.e 2 hours before your order. The refund of the cancelled order will be credited to your account.',
    answer: (
      <>
        To cancel your order and receive a refund, you have a window of up to 2
        hours before your order is processed. To do this, please reach out
        directly to the respective seller and request the cancellation. The
        refunded amount will be credited to your account.
      </>
    ),
  },
  {
    id: 3,
    question: 'When will I receive the refund for the cancelled order?',
    answer: (
      <>
        To ensure a smooth refund process, please make sure the order is
        cancelled before the brand/designer has processed it. We will initiate
        the refund to the source account within 24-48 business hours of
        receiving the returned products. Please allow an additional 2-3 business
        days for the refunded amount to reflect in your account. For the safety
        and security of both buyers and sellers, LynkTowns utilizes the ESCROW
        payment method.
      </>
    ),
  },
];

const Cancellation = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Cancellation
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12  px-4 py-8  md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className='text-sm md:text-base'>
                We are well aware that you are all excited to receive your
                products ASAP. Regrettably, when you change your mind and choose
                to cancel your orders, please note that you can cancel the order
                before we process it. Once the order is processed, we do not
                entertain any cancellation requests.
                <br />
                <br />
                You may also send an email on{' '}
                <a
                  href='mailto: support@lynktown.com'
                  className='text-blue-500 font-medium'
                >
                  support@lynktown.com
                </a>{' '}
                <br />
                <br />
                Please be advised that some orders are shipped almost
                immediately, and it may not always be possible to cancel.
              </h4>
            </div>
            <div className='mt-6'>
              <h1 className='underline text-lg font-bold '>
                Frequently asked questions
              </h1>
              <div className={`support--pages__accordion--styles my-10`}>
                {cancellations?.map((faq, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<MdExpandMore className='text-2xl' />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <h1>{faq.question}</h1>
                      </AccordionSummary>
                      <AccordionDetails>
                        <h4>{faq.answer}</h4>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cancellation;
