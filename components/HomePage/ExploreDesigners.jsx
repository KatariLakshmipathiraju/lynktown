import Link from "next/link";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const Designers = [
  {
    designerName: "Jo’s Fashion",
    image: "/assets/exploreDesigners.svg",
    location: "Kalyan nagar, Bangalore",
  },
  {
    designerName: "Fulki Designer Studio",
    image: "/assets/exploreDesigners.svg",
    location: "Mumbai, Maharashtra",
  },
  {
    designerName: "Bratt Heww",
    image: "/assets/exploreDesigners.svg",
    location: "Chamrajpeth, Bangalore",
  },
  {
    designerName: "Aarat by Aakshi",
    image: "/assets/exploreDesigners.svg",
    location: "Jaipur, Rajasthan",
  },
  {
    designerName: "Fulki Designer Studio",
    image: "/assets/exploreDesigners.svg",
    location: "Mumbai, Maharashtra",
  },
];

export default function ExploreDesigners() {
  return (
    <main className="px-5 sm:px-8 md:px-10 xl:px-16 mt-14 xl:mt-20 flex flex-col gap-4">
      <h1 className="text-2xl lg:text-[38px] font-semibold text-[#6A5B40] text-center">
        Explore Designers on LynkTown
      </h1>

      <section className="mb-4 mt-10 overflow-x-auto">
        <div className="flex gap-5">
          {Designers.map((designer, index) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col gap-1 bg-[#FFF4E2] border border-[#6D5C41] min-w-[250px] h-64 text-center px-6 py-4"
            >
              <Image
                src={designer.image}
                alt={`Image of ${designer.designerName}`} 
                width={118}
                height={118}
                className="rounded-full border-2 border-[#6D5C41] object-contain mx-auto"
              />
              <h1>{designer.designerName}</h1>
              <p className="flex gap-1 justify-center items-center opacity-80 whitespace-nowrap">
                <span className="inline-block">
                  <CiLocationOn size={18} />
                </span>
                <span className="text-sm">{designer.location}</span>
              </p>
              <Link
                href="https://app.lynktown.com/designers"
                className="text-[#6D5C41] underline font-semibold mt-2"
              >
                Explore Lynks
              </Link>
            </div>
          ))}
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
