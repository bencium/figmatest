import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="w-96 p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start">
        <div className="self-stretch flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <h1 className="self-stretch text-[#111928] text-2xl font-bold leading-[30px]">
              Noteworthy technology acquisitions 2021
            </h1>
            <p className="self-stretch text-gray-500 text-base font-normal leading-normal">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
          <button className="px-5 py-2.5 bg-[#6b39da] rounded-lg justify-center items-center gap-2 inline-flex hover:bg-[#5a2fc7] transition-colors">
            <span className="text-white text-sm font-medium leading-[21px]">Read more</span>
            
              <Image
                src="/arrow-right.svg"
              alt="Arrow right"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </button><button className="px-5q"></button>
        </div>
      </div>
    </div>
  );
}
