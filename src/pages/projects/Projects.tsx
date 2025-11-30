import Navigation from "../shared/components/navigation/Navigation";
import { projects } from "../shared/components/work-grid/projects";
import WorkGrid from "../shared/components/work-grid/WorkGrid";
import './Projects.scss';

export const Projects = () => {
    return (
        <div className="projects-page">
            <Navigation />
            <WorkGrid projects={projects} />
        </div>
    )
}

export default Projects;