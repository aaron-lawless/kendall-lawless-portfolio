import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/portfolio/Portfolio'
import './App.css'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Projects from './pages/projects/Projects'
import { Project } from './pages/projects/Project'
import { Contact } from './pages/contact/Contact'

function App() {
  useSmoothScroll({ delay: 500, pace: 0.3 });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
  