import { useEffect } from "react";
import Navbar from "../nav/Navbar";
import { Footer } from "../nav/Footer";

export function PageLayout(params) {
  useEffect(() => {
    document.title = params?.title ?? "New page";
  }, []);

  return (
    <div>
      <Navbar className='fixed z-20' />
      {!params?.extendBodyBehindNavbar && <div className='h-16'></div>}
      <div className='flex flex-col'>{params.children}</div>
      {(!params.hideFooter || params.hideFooter == null) && <Footer />}
    </div>
  );
}
