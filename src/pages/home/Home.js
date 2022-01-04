import landing from "../../assets/landing.jpg";

// sections
import {
  IvanPoluninSection,
  ContactUsSection,
  SingaporePastSection,
  ProjectsSection,
} from "./sections/Sections";
import { PageLayout } from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout title='Ivan Polunin Multimedia Lab'>
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
      <div className='container px-6 py-20 lg:p-60 lg:pb-20 space-y-20 lg:space-y-60'>
        <SingaporePastSection />
      </div>
      <IvanPoluninSection />
      <div className='container px-6 py-20 lg:p-60 lg:pb-20 space-y-20 lg:space-y-60'>
        <ProjectsSection />
        <ContactUsSection />
      </div>
    </PageLayout>
  );
}

export default Home;
