import landing from "../../assets/landing.jpg";
import Navbar from "../../components/nav/Navbar";
import {
  IvanPoluninSection,
  ContactUsSection,
  ProjectsSection,
} from "./sections/Sections";

function Home() {
  return (
    <div>
      <Navbar className='fixed z-20 w-full' />
      <section id='landing' className='relative'>
        <img src={landing} alt='' className='h-screen w-full object-cover' />
        <div className='bg-gray-800 absolute top-0 h-screen w-full bg-opacity-40 z-10'>
          <div className='container text-gray-100 z-20 h-full flex flex-col items-start justify-center'>
            <div className='max-w-xl'>
              <h1 className='mb-5'>Discover another side of Singapore.</h1>
              <h4 className='mb-10'>
                Artefacts from the past documenting life in and around post-war
                Singapore from the perspective of Dr Ivan Polunin.
              </h4>
              <a href='#sg' className='btn'>
                About
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='sg' className='w-full'>
        <div className='container md:p-40 px-10 py-24 text-center'>
          <h2 className='lg:mb-4 mb-7'>Singapore 50 years ago</h2>
          <p>
            Sit eiusmod occaecat laborum dolore et in dolor. In laboris commodo
            ipsum consequat non et aute magna est. In incididunt nulla ipsum
            tempor. In labore nulla labore ullamco non. Nostrud consequat
            officia enim aute culpa cillum tempor tempor.
          </p>
        </div>
      </section>
      <IvanPoluninSection />
      <ContactUsSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
