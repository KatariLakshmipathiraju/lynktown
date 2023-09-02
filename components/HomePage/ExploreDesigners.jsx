import Link from "next/link";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export default function ExploreDesigners() {
  return (
    <main className="px-5 sm:px-8 md:px-10 xl:px-16 mt-14 xl:mt-20 flex flex-col gap-4">
      <h1 className="text-2xl lg:text-[38px] font-semibold text-[#6A5B40] text-center">
        Explore Designers on LynkTown
      </h1>

      <section className="mb-4 mt-10 overflow-x-auto">
        <div className="flex gap-5">
          {/* first card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Jo’s Fashion</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span className="text-sm"> Kalyan nagar, Bangalore</span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>

          {/* second card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Fulki Designer Studio</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap text-sm">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span> Mumbai, Maharashtra</span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>

          {/* third card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Bratt Heww</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap text-sm">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span> Chamrajpeth, Bangalore</span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>

          {/* fourth card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Aarat by Aakshi</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap text-sm">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span> Jaipur, Rajasthan</span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>

          {/* fifth card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Jo’s Fashion</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap text-sm">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span> Kalyan nagar, Bangalore</span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>

          {/* sixth card  */}
          <div className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4">
            <Image
              src="/assets/exploreDesigners.svg"
              alt="explore designers"
              width={118}
              height={118}
              className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
            />
            <h1>Aarat by Aakshi</h1>
            <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap text-sm">
              <span className=" inline-block">
                <CiLocationOn size={18} />
              </span>
              <span> Jaipur, Rajasthan </span>
            </p>
            <Link
              href="https://app.lynktown.com/designers"
              className="text-[#6D5C41] underline font-semibold mt-2"
            >
              Explore Lynks
            </Link>
          </div>
        </div>
      </section>

      <Link
        href="https://app.lynktown.com/designers"
        target="_blank"
        className="flex justify-center items-center"
      >
        <button className="text-lg font-medium bg-[#6A5B40] text-white rounded px-6 py-2">
          Explore Designers{" "}
        </button>
      </Link>
    </main>
  );
}
