import { useState, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './WorkGrid.scss'
import type { Project, ProjectTag } from './projects'
import { AVAILABLE_TAGS, TAG_CONFIG } from './projects'

export default function WorkGrid( { projects }: { projects: Project[] } ) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const intervalsRef = useRef<{ [key: string]: any }>({})
  const navigate = useNavigate()

  // Get all unique tags from all projects
  const allTags = useMemo(() => {
    return ['All', ...AVAILABLE_TAGS]
  }, [])

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return projects
    return projects.filter(project => project.tags.includes(selectedTag as ProjectTag))
  }, [projects, selectedTag])

  const handleMouseEnter = (projectId: string) => {
    setHoveredProject(projectId)
    
    // Start rotating images
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const project = filteredProjects.find(p => p.id === projectId)
        if (!project) return prev
        
        const currentIndex = prev[projectId] || 0
        const nextIndex = (currentIndex + 1) % project.images.length
        
        return { ...prev, [projectId]: nextIndex }
      })
    }, 500)

    // Store interval ID to clear later
    intervalsRef.current[projectId] = interval
  }

  const handleMouseLeave = (projectId: string) => {
    setHoveredProject(null)
    
    // Clear the specific interval for this project
    if (intervalsRef.current[projectId]) {
      clearInterval(intervalsRef.current[projectId])
      delete intervalsRef.current[projectId]
    }
    
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: 0 }))
  }

  return (
    <section className="work-grid">
      <h1 className="work-grid-title">My Collection of Projects.</h1>
      <div className="work-grid-filters">
        {allTags.map(tag => {
          const TagIcon = tag !== 'All' ? TAG_CONFIG[tag as ProjectTag].icon : null;
          return (
            <button
              key={tag}
              className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {TagIcon && <TagIcon size={18} />}
              {tag}
            </button>
          );
        })}
      </div>
      
      <div className="work-grid-items">
        {filteredProjects.map(project => (
          <div 
            key={project.id}
            className="work-item"
          >
            <div className="work-item-content">
              <h3 className="work-item-title">{project.title}</h3>
              <div className="work-item-divider"></div>
              <p className="work-item-subtitle">{project.subtitle}</p>
              <div className="work-item-divider"></div>
              <div className="work-item-tags">
                {project.tags.map(tag => {
                  const TagIcon = TAG_CONFIG[tag].icon;
                  return (
                    <span key={tag} className="work-item-tag">
                      <TagIcon size={16} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          <div 
            className="work-item-image"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
              <img 
                src={project.images[currentImageIndex[project.id] || 0]} 
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
