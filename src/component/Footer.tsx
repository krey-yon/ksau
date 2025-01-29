import React from "react";

function Footer() {
  return (
    <footer className="bg-black/50 text-gray-400 text-center py-4 border-t border-green-500/30">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-36 md:px-10 lg:px-20   ">
        <div className="flex gap-2 flex-row">
          <span className="text-white">Ksau</span>
          <p>Empowering users with fast, secure file uploads</p>
        </div>
        <div className="flex gap-4">
            <button>Github</button>
            <button>Telegram</button>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
