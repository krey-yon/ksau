import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { LuLockKeyholeOpen } from "react-icons/lu";
import { IoMdSync } from "react-icons/io";
import { LuFiles } from "react-icons/lu";

function PageThree() {
  return (
    <section className="flex flex-col items-center justify-center bg-radial-gradient text-gray-400 py-4">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h1>
        <p className="text-lg md:text-xl">
          ksau comes packed with features designed to make your file management
          effortless and efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center bg-black/50 border border-green-500 rounded-lg p-8">
          <div className="">
            <AiFillThunderbolt size={40} className="text-green-500 mb-8" />
          </div>
          <h2 className="text-white font-extrabold text-2xl mb-2">Lightning Fast</h2>
          <p>
            Upload files at breakneck speeds, <br /> saving you valuable time.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-black/50 border border-green-500 rounded-lg p-8">
          <div><LuLockKeyholeOpen size={40} className="text-green-500 mb-8" /></div>
          <h2 className="text-white font-extrabold text-2xl mb-2">Bank-Level Security</h2>
          <p>
            Your files are protected with state-of- <br /> the-art encryption.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-black/50 border border-green-500 rounded-lg p-8">
          <div><IoMdSync size={40} className="text-green-500 mb-8" /></div>
          <h2 className="text-white font-extrabold text-2xl mb-2">Seamless Sync</h2>
          <p>
            Automatically sync your uploads <br /> across all your devices.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-black/50 border border-green-500 rounded-lg p-8">
          <div><LuFiles size={40} className="text-green-500 mb-8" /></div>
          <h2 className="text-white font-extrabold text-2xl mb-2">Unlimited Storage</h2>
          <p>
            Never worry about running out of <br /> space for your important
            files.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageThree;
