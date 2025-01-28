import React from "react";
import { FaTerminal } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { GoPeople } from "react-icons/go";

function PageTwo() {
  return (
    <section className="bg-black text-gray-400 mb-8">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-white font-bold text-3xl md:text-4xl mb-4">
          About ksau
        </h1>
        <p className="text-xl text-gray-400 mx-auto">
          ksau is a revolutionary file upload tool designed to simplify and
          streamline your digital workflow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div className="flex flex-col items-center py-4 border border-green-500 rounded-lg m-2 p-4">
          <div>
            <FaTerminal size={40} className="text-green-500" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold py-2">CLI Power</h2>
            <p>Harness the full potential of command-line efficiency.</p>
          </div>
        </div>
        <div className="flex flex-col items-center py-4 border border-green-500 rounded-lg m-2 p-4">
          <div>
          <GoPeople size={40} className="text-green-500" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold py-2">
            User-Friendly</h2>
            <p>Intuitive interface suitable for both beginners and experts.</p>
          </div>
        </div>
        <div className="flex flex-col items-center py-4 border border-green-500 rounded-lg m-2 p-4">
          <div>
          <FiGlobe size={40} className="text-green-500" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold py-2">Global Access</h2>
            <p>Upload and access your files from anywhere in the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTwo;
