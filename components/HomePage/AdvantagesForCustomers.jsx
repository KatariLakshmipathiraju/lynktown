import Image from 'next/image';

export default function AdvantagesForCustomers() {
  return (
    <main className='px-5 sm:px-8 md:px-10 xl:px-16 mt-14 xl:mt-16 mb-8'>
      <h1 className='text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl font-semibold text-center lg:text-right lg:mr- xl:mr- text-[#6A5B40]'>
        LynkTown advantages for Customers
      </h1>
      <section className='flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center mt-6 lg:mt-2'>
        {/* Image  */}
        <section className='lg:w-[33%] xl:w-[40%] mt-4 sm:mt-28 lg:mt-0'>
          <div className='relative'>
            <Image
              src='/advantagesCustomers-bg.svg'
              alt='background'
              width={360}
              height={558}
              className='w-[280px] sm:w-auto xl:w-[320px] mx-auto'
            />
            <Image
              src='/advantagesCustomers.png'
              alt='Customer-shopping'
              width={627}
              height={687}
              className='mx-auto absolute bottom-0'
            />
          </div>
        </section>

        {/* Content  */}
        <section className='lg:w-[65%] xl:w-[60%] flex flex-col gap-4 items-start lg:items-end'>
          <div className='flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-7'>
            {/* first Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#FFF4E2] px-3 py-3 rounded'>
                  <Image src='/7.svg' alt='icon' width={24} height={28} />
                </div>
                <p className='text-base'>
                  1000s of new styles from fashion designers across the country.
                </p>
              </div>
            </div>

            {/* second Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#C8C4E9] px-3 py-3 rounded'>
                  <Image src='/8.svg' alt='icon' width={24} height={28} />
                </div>
                <p className='text-base'>
                  Buy exclusive and limited editions from well known and
                  creative designers.
                </p>
              </div>
            </div>

            {/* third Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#E7FBF9] px-3 py-3 rounded'>
                  <Image src='/9.svg' alt='icon' width={24} height={28} />
                </div>
                <p className='text-base'>
                  Get your products stitched for your body type.
                </p>
              </div>
            </div>

            {/* fourth Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#C8C4E9] px-3 py-3 rounded'>
                  <Image src='/10.svg' alt='icon' width={18} height={28} />
                </div>
                <p className='text-base'>
                  Buy products from designers who worked for celebrities and
                  artists.
                </p>
              </div>
            </div>

            {/* fivth Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#E0C1F4] px-3 py-3 rounded'>
                  <Image src='/11.svg' alt='icon' width={24} height={28} />
                </div>
                <p className='text-base'>
                  Safe payment and shipment through our ESCROW model.
                </p>
              </div>
            </div>

            {/* sixth Cards  */}
            <div className='bg-[#EEECE7] px-5 py-6 rounded hover:bg-[#857250] hover:text-white'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='bg-[#FDE0F6] px-3 py-3 rounded'>
                  <Image src='/12.svg' alt='icon' width={24} height={28} />
                </div>
                <p className='text-base'>
                  Manage all your orders with LynkTown.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
