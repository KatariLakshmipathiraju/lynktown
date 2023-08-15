import Image from "next/image";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

export default function AdvantagesForSellers() {
  return (
    <main className="px-5 sm:px-8 md:px-10 xl:px-16 mt-14 xl:mt-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-semibold text-center lg:text-left text-[#6A5B40]">
        LynkTown advantages for Sellers
      </h1>
      <section className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-between lg:items-center mt-6 lg:mt-2">
        {/* Content  */}
        <section className="lg:w-[65%] xl:w-[60%] flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-7">
            {/* first Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#FFF4E2] px-3 py-3 rounded">
                  <Image src="/1.svg" alt="icon" width={25} height={27} />
                </div>
                <p className="text-base">
                  Manage enquiries and sell products on social platforms at ZERO
                  commission.
                </p>
              </div>
            </div>

            {/* second Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#C8C4E9] px-3 py-3 rounded">
                  <Image src="/2.svg" alt="icon" width={24} height={28} />
                </div>
                <p className="text-base">
                  Manage payments, shipments, Returns, alterations and more.
                </p>
              </div>
            </div>

            {/* third Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#E7FBF9] px-3 py-3 rounded">
                  <Image src="/3.svg" alt="icon" width={23} height={23} />
                </div>
                <p className="text-base">
                  Reach new customers on LynkTown to sell your products
                </p>
              </div>
            </div>

            {/* fourth Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#C8C4E9] px-3 py-3 rounded">
                  <Image src="/4.svg" alt="icon" width={24} height={28} />
                </div>
                <p className="text-base">
                  Notify your existing and new customers about your new arrivals
                </p>
              </div>
            </div>

            {/* fivth Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#E0C1F4] px-3 py-3 rounded">
                  <Image src="/5.svg" alt="icon" width={26} height={28} />
                </div>
                <p className="text-base">
                  Collab with influencers to increase sales
                </p>
              </div>
            </div>

            {/* sixth Cards  */}
            <div className="bg-[#EEECE7] px-5 py-6 rounded">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="bg-[#FDE0F6] px-3 py-3 rounded">
                  <Image src="/6.svg" alt="icon" width={27} height={28} />
                </div>
                <p className="text-base">Create an ecommerce store for free</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/vendor">
              <button className="bg-[#6A5B40] text-white font-medium text-lg px-5 py-2 rounded">
                Learn more
              </button>
            </Link>
            <button className="bg-[#6A5B40] text-white font-medium text-lg px-4 py-2 rounded flex items-center gap-3">
              <span>Download App</span>{" "}
              <span>
                <BsDownload size={19} />
              </span>
            </button>
          </div>
        </section>
        {/* Image  */}
        <section className="lg:w-[33%] xl:w-[31%]">
          <Image
            src="/advantagesSellers.png"
            alt="advantagesSellers"
            width={422}
            height={646}
            className="w-[300px] sm:w-[360px] xl:h-[520px] mx-auto"
          />
        </section>
      </section>
    </main>
  );
}
