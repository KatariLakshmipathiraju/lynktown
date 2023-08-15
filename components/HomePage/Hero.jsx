import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#6A5B40] lg:h-[625px]  pt-6 sm:pt-10 lg:pt-12 xl:pt-16 text-white flex flex-col items-center justify-center gap-32 lg:flex-row lg:justify-between lg:items-center lg:gap-3 relative px-4 sm:px-8 md:px-10 xl:px-12">
      <div className="flex flex-col gap-2 sm:block">
        <h1 className="md:text-4xl text-[28px] lg:text-5xl xl:text-[53px]  text-left leading-normal lg:leading-[70.2px] font-medium lg:max-w-[640px] xl:max-w-[680px]">
          Don&#39;t buy from LynkTown, buy directly from sellers on LynkTown.
        </h1>
        <p className="my-3 sm:my-8 mx-auto text-left">
          LynkTown is trusted by 5000+ fashion designers, artists &{" "}
          <br className="hidden sm:block" /> business owners
        </p>

        <button className="lg:text-xl font-medium border px-5 py-1.5 rounded w-full lg:w-auto">
          Explore Designers
        </button>
      </div>

      {/* Hero Image  */}
      <div className="relative">
        <Image
          src="/Hero-bg.svg"
          alt="Hero Bg"
          width={495}
          height={495}
          className="w-[345px] lg:w-[400px] xl:w-[465px]"
        />
        <div className="!absolute !bottom-0  xl:!translate-x-[5%]">
          <Image
            src="/Hero.svg"
            alt="Hero Image"
            width={341}
            height={580}
            className="w-[280px] lg:w-[300px] xl:w-[341px]"
          />
          <div className="absolute bottom-[38%]  left-[58%]">
            <Image
              src="/bag.svg"
              alt="Hero-bag"
              width={65}
              height={82}
              className="w-[55px] xl:w-[62px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-2 left-0">
        <Image src="/bg.svg" alt="bg" width={122} height={208} />
      </div>
    </section>
  );
}
