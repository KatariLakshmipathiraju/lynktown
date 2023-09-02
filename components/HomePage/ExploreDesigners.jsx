import Link from "next/link";

export default function ExploreDesigners() {
  return (
    <section className="px-5 sm:px-8 md:px-10 xl:px-16 mt-14 xl:mt-20 flex flex-col gap-4">
      <h1 className="text-2xl lg:text-[38px] font-semibold text-[#6A5B40] text-center">
        Explore Designers on LynkTown
      </h1>

        <div>

        </div>

      <Link href="#" target="_blank" className="flex justify-center items-center">
        <button className="text-lg font-medium bg-[#6A5B40] text-white rounded px-6 py-2">
          Explore Designers{" "}
        </button>
      </Link>
    </section>
  );
}
