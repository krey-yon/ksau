import React from "react";
import Image from "next/image";

function TestimonialPage() {
  return (
    <div className=" bg-black/30 flex flex-col items-center justify-center text-white">
      <div className="text-center mb-12 mt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What Our Users Say
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {" "}
          Don&apos;t just take our word for it. Here&apos;s what ksau users have
          to say about their <br /> experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4  mx-auto mb-12">
        <div className="bg-black p-6 rounded-lg border border-green-500/30 shadow-xl relative overflow-hidden transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-500/50">
          <div className="flex gap-2 items-center mb-4 ">
            <Image
              src="/image/photo-1599566150163-29194dcaad36.avif"
              alt="Portrait"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>
              {" "}
              <h1 className="text-lg font-semibold text-white">
                Alex Johnson
              </h1>{" "}
              <p className="text-sm text-gray-400">Software Developer</p>{" "}
            </span>
          </div>
          <p className="text-gray-300">
            ksau has revolutionized the way I handle file uploads. <br />{" "}
            It&apos;s incredibly fast and user-friendly!
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg border border-green-500/30 shadow-xl relative overflow-hidden transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-500/50">
          <div className="flex gap-2 items-center mb-4">
            <Image
              src="/image/photo-1494790108377-be9c29b29330.avif"
              alt="Portrait"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>
              {" "}
              <h1 className="text-lg font-semibold text-white">
                Sarah Lee
              </h1>{" "}
              <p className="text-sm text-gray-400">Digital Marketer</p>{" "}
            </span>
          </div>
          <p className="text-gray-300">
            I&apos;ve tried many file upload tools, but ksau stands out <br />{" "}
            with its simplicity and powerful features.
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg border border-green-500/30 shadow-xl relative overflow-hidden transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-500/50">
          <div className="flex gap-2 items-center mb-4">
            <Image
              src="/image/photo-1506794778202-cad84cf45f1d.avif"
              alt="Portrait"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>
              {" "}
              <h1 className="text-lg font-semibold text-white">
                Michael Chen
              </h1>{" "}
              <p className="text-sm text-gray-400">IT Manager</p>{" "}
            </span>
          </div>
          <p className="text-gray-300">
            The security features of ksau give me peace of mind <br /> when
            handling sensitive company data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage;
