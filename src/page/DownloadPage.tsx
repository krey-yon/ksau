import React from "react";
import { FiDownload } from "react-icons/fi";

function DownloadPage() {
  return (
    <div className="flex flex-col items-center bg-radial-gradient justify-center ">
      <div className="flex bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg md:p-12 shadow-2xl overflow-hidden  flex-col items-center justify-center text-center text-white p-10 m-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Revolutionize Your File Uploads?
        </h1>
        <p className="text-xl text-gray-300 mb-8 mx-auto">
          Join thousands of satisfied users and experience the power of ksau
          today. Fast, <br /> secure, and effortless file uploads are just a
          click away.
        </p>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [_&svg]:pointer-events-none [_&svg]:size-4 [_&svg]:shrink-0 h-11 rounded-md px-8 bg-green-500 text-black hover:bg-green-600 transition-all duration-300 ease-out hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] active:translate-y-[0px] relative z-30
"
        >
          {" "}
          <FiDownload className="inline-flex" /> Download Ksau CLI{" "}
        </button>
      </div>
    </div>
  );
}

export default DownloadPage;
