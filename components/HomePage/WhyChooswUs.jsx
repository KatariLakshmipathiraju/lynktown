import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <main className="px-6 sm:px-8 md:px-10 xl:px-16 py-8 xl:py-10 mt-12 xl:mt-16 bg-[#EEECE7]">
      <h1 className="xl:text-[40px] font-light  text-center text-[#6D5C41]">
        Why choose us <br />
        {""}
        <span className="font-semibold text-2xl xl:text-[38px]">
          Why purchase from sellers on LynkTown
        </span>
      </h1>
      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-6 xl:gap-6 mt-10">
        <div className="flex flex-col items-start lg:items-end lg:justify-between gap-6 xl:gap-20 max-lg:order-2">
          <div className="flex flex-row-reverse lg:flex-row items-center gap-3 lg:gap-4">
            <p className="font-normal text-lg flex-wrap lg:text-right">
              Be a part of the economy growth of the Country
            </p>
            <Image src="/13.svg" alt="economy growth" width={60} height={60} />
          </div>
          <div className="flex flex-row-reverse lg:flex-row items-center gap-3 lg:gap-4">
            <p className="font-normal text-lg flex-wrap">Be a concious buyer</p>
            <Image src="/14.svg" alt="economy growth" width={60} height={60} />
          </div>
        </div>
        <Image
          src="/Why-choose-us.png"
          alt="Why Choose Us"
          width={348}
          height={493}
          className=" max-lg:order-1"
        />
        <div className="flex flex-col items-start lg:items-start lg:justify-between gap-6 xl:gap-20 max-lg:order-3">
          <div className="flex flex-row-reverse lg:flex-row-reverse items-center gap-4">
            <p className="font-normal text-lg flex-wrap">
              Buy from SMBs who are creative & provide quality products.
            </p>
            <Image src="/15.svg" alt="economy growth" width={60} height={60} />
          </div>
          <div className="flex flex-row-reverse lg:flex-row-reverse items-center gap-4">
            <p className="font-normal text-lg flex-wrap">
              Buy sustainable products{" "}
            </p>
            <Image src="/16.svg" alt="economy growth" width={60} height={60} />
          </div>
        </div>
      </section>
    </main>
  );
}
