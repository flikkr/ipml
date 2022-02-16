// sections
import {
  IvanPoluninSection,
  ContactUsSection,
  SingaporePastSection,
  ProjectsSection,
  LandingSection,
} from "./sections";
import { PageLayout } from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout title='Ivan Polunin Multimedia Lab' extendBodyBehindNavbar>
      <LandingSection />
      <div className='container'>
        <div className='py-52 lg:p-72'>
          <SingaporePastSection />
        </div>
        <IvanPoluninSection />
        <div className='py-32 lg:py-64 space-y-32 lg:space-y-60'>
          <ProjectsSection />
          <ContactUsSection />
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
