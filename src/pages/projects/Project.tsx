import { useParams } from 'react-router-dom';
import Navigation from '../shared/components/navigation/Navigation';
import { projects } from '../shared/components/work-grid/projects';
import './Project.scss';

export const Project = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="project-page">
                <Navigation />
                <div className="project-container">
                    <h1>404 Project not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="project-page">
            <Navigation />
            <div className="project-container">
                {/* Header Section */}
                <div className="project-header">
                    <h1>{project.title}</h1>
                </div>

                {/* Images Section */}
                <div className="project-images">
                    {project.images.map((image, index) => (
                        <div key={index} className="project-image-wrapper">
                            <img 
                                src={image} 
                                alt={`${project.title} - Image ${index + 1}`}
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;