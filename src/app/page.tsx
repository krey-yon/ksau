import Navbar from "@/component/Navbar";
import DownloadPage from "@/page/DownloadPage";
import PageOne from "@/page/PageOne";
import PageThree from "@/page/PageThree";
import PageTwo from "@/page/PageTwo";
import TestimonialPage from "@/page/TestimonialPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="relative z-10">
        <PageOne />
        <Navbar />
        <PageTwo />
        <PageThree />
        <TestimonialPage />
        <DownloadPage />
      </div>
    </div>
  );
}
