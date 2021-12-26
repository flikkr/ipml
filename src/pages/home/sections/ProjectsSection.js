import { Card } from "../../../components/common/Common";

export function ProjectsSection() {
  const projects = getProjects();

  return (
    <section id='projects' className='container w-full'>
      <div className='md:p-40 py-24 text-center'>
        <h2 className='mb-7 lg:mb-8'>Our Projects</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 '>
          {projects}
        </div>
      </div>
    </section>
  );
}

function getProjects() {
  const projects = [
    {
      imgSrc: "",
      title: "The book",
      description: "Lorem ipsum",
    },
    {
      imgSrc: "",
      title: "The book",
      description: "Lorem ipsum",
    },
    {
      imgSrc: "",
      title: "The book",
      description: "Lorem ipsum",
    },
  ];

  return projects.map((project) => (
    <Card
      imgSrc={project.imgSrc}
      title={project.title}
      description={project.description}
    />
  ));
}
