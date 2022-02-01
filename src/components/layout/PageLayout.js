import { useEffect } from "react";
import Navbar from "../nav/Navbar";
import { Footer } from "../nav/Footer";

export function PageLayout(params) {
  useEffect(() => {
    document.title = params?.title ?? "New page";
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Navbar
        className={`${params?.extendBodyBehindNavbar && "fixed"} z-20`}
      />
      <div className='flex-grow'>{params.children}</div>
      {(!params.hideFooter || params.hideFooter == null) && <Footer />}
    </div>
  );
}
