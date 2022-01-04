import { useEffect } from "react";
import Navbar from "../nav/Navbar";
import { Footer } from "../nav/Footer";

export function PageLayout(params) {
  useEffect(() => {
    document.title = params?.title ?? "New page";
  }, []);

  return (
    <div>
      <Navbar className='fixed z-20 w-full' />
      {params.children}
      {(!params.hideFooter || params.hideFooter == null) && <Footer />}
    </div>
  );
}
