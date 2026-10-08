import { projectsData } from '@/utils/data/projects-data';
import SectionHeading from '../../helper/section-heading';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <section id="projects" className="py-8 md:py-10">
      <SectionHeading index="04" eyebrow="Projects" title="Selected projects" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
