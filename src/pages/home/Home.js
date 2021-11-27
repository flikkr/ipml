import landing from "../../assets/landing.jpg";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar className='absolute z-20 w-full' />
      <div className='relative'>
        <img src={landing} alt='' className='h-screen w-full object-cover' />
        <div className='bg-gray-800 absolute top-0 h-screen w-full bg-opacity-40 z-10'>
          <div className='container text-gray-100 z-20 h-full flex flex-col items-start justify-center'>
            <div className='max-w-xl'>
              <h1 className='mb-5'>Discover another side of Singapore.</h1>
              <h4 className='mb-5'>
                Artefacts from the past documenting life in and around post-war
                Singapore from the perspective of Dr Ivan Polunin.
              </h4>
              <button className='bg-gray-900 tracking-wider font-Playfair py-3 px-5 rounded-sm hover:bg-gray-800'>
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
