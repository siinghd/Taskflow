import { GetStaticProps, GetStaticPaths } from 'next';
import projects from '../../../../data/projects'

interface Project {
  id: number;
  done: boolean;
  title: string;
  createdAt: string;
  lastModified: string;
}
  
interface ProjectPageProps {
  project: Project;
}
  
export const getStaticPaths: GetStaticPaths<Record<string, string>> = async () => {

  const paths = projects.map((project) => ({
      params: { locale: 'en', id: project.id.toString() },
  }));
  

  return { paths, fallback: false };
};
  
export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const projectId = params?.id;
  console.log('projectId =', projectId, 'type of =', typeof projectId);

  const project = projects.find((p) => p.id.toString() == projectId);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: project || null,
    },
  };
};
  
const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  /* console.log('projects = ', projects)
  console.log('project = ', project) */
  if (!project) {
      // Handle the case where the project is not found, e.g., show an error message.
      return <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit md-title'>Project not found</div>;
  }
  return (
    <div>
      <h1>{project.title}</h1>
      <p>Created at: {project.createdAt}</p>
      <p>Last modified: {project.lastModified}</p>
    </div>
  );
};
  
  export default ProjectPage;