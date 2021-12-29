import { Card } from "../../../components/common/Common";

export function ProjectsSection() {
  const projects = getProjects();

  return (
    <section id='projects'>
      <h2 className='mb-7 text-center'>Our Projects</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 '>
        {projects}
      </div>
    </section>
  );
}

function getProjects() {
  const projects = [
    {
      imgSrc: "",
      imgAlt: "",
      title: "The book",
      description: "Lorem ipsum",
    },
    {
      imgSrc: "",
      imgAlt: "",
      title: "The book",
      description: "Lorem ipsum",
    },
    {
      imgSrc: "",
      imgAlt: "",
      title: "The book",
      description: "Lorem ipsum",
    },
  ];

  return projects.map((project) => (
    <Card
      imgSrc={project.imgSrc}
      imgAlt={project.imgAlt}
      title={project.title}
      description={project.description}
    />
  ));
}
