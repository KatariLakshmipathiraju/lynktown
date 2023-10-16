import React from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

export const returnNRefundData = [
  {
    id: 1,
    question: 'How do I return or refund my order?',
    answer: (
      <>
        Customers can request returns for most items purchased on LynkTown
        within the return timelines specified by the vendor. Items are
        returnable if they are physically damaged, have missing parts or
        accessories, are defective, or if they are different from the
        description on the product detail page.
      </>
    ),
  },
  {
    id: 2,
    question: 'How do I return items?',
    answer: (
      <>
        First check whether return or exchange window is still open
        <ol className='list-decimal'>
          <li>Go to Your Orders.</li>
          <li>Choose an item that you want to return or exchange.</li>
          <li>Select a reason from the menu and continue.</li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    question: 'What are the return guidelines?',
    answer: (
      <>
        <ol className='list-decimal'>
          <li>
            Vendors specify a certain period during which returns / exchanges
            are accepted.
          </li>
          <li>
            Vendors define which items are eligible for return. These are
            usually products that are physically damaged, have missing parts or
            accessories, are defective, or are different from the description on
            the product detail page.
          </li>
          <li>
            The item should typically be in its original condition, including
            the packaging. Some vendors may have specific requirements for how
            the item should be returned.
          </li>
          <li>
            nce the vendor receives the returned item, they will inspect it to
            ensure it meets the return guidelines. Processing the return,
            including issuing refunds or replacements, may take some time.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    question: 'Categories not eligible for return',
    answer: (
      <>
        <ul className='list-disc'>
          <li>
            Items that have been customised with specific designs, monograms, or
            alterations to fit your measurements are usually non-returnable.
          </li>
          <li>
            Clothing marked as "clearance" or "final sale" is often
            non-returnable, as these items are sold at a reduced price to clear
            inventory.
          </li>
          <li>
            If you have damaged or altered the clothing in any way, it may not
            be eligible for return.
          </li>
          <li>
            Clothing that has been worn, washed, or altered from its original
            condition is often not returnable.
          </li>
          <li>
            If the buyer incurs shipping charges and duties while returning a
            damaged product, these costs will not be refunded.
          </li>
          <li>Free product provided by the brand</li>

          <li>Serial Number has been tampered.</li>
        </ul>
      </>
    ),
  },
];

const ReturnAndRefund = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Return & Refund
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
                We want our customers to love the experience of shopping with us
                and feel happy with their purchases, but if something is not
                right, let us know. You can return if the order is not as
                expected as what you expected. Once received, the customer care
                team at LynkTown would inspect the product for the need for
                exchange, and based on their jurisdiction, we will refund.
              </h4>
            </div>
            <div className='mt-6'>
              <h1 className='underline text-lg font-bold '>
                Frequently asked questions
              </h1>
              <div className={`support--pages__accordion--styles my-10`}>
                {returnNRefundData?.map((faq, index) => {
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

export default ReturnAndRefund;
