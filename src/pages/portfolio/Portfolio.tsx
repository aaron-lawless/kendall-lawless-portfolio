import Navigation from '../shared/components/navigation/Navigation'
import HeroHeader from './components/hero-header/HeroHeader'
import WorkGrid from '../shared/components/work-grid/WorkGrid'
import './Portfolio.scss'
import { projects } from '../shared/components/work-grid/projects'

export default function Portfolio() {

  return (
    <div className="portfolio-page">
      <Navigation/>
      <HeroHeader/>
      <WorkGrid projects={projects}/>
    </div>
  )
}
