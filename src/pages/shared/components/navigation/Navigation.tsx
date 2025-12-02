import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>LAWLESS</Link>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavigationMenu>
            <NavigationMenuList className="nav-menu-list">
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link" href="projects" onClick={closeMobileMenu}>
                  WORK
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link" href="about" onClick={closeMobileMenu}>
                  ABOUT
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link" href="process" onClick={closeMobileMenu}>
                  PROCESS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link" href="contact" onClick={closeMobileMenu}>
                  CONTACT
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="theme-toggles">
            <button className="theme-btn theme-btn-dark" aria-label="Dark theme" />
            <button className="theme-btn theme-btn-light" aria-label="Light theme" />
          </div>
        </div>
      </div>
    </nav>
  )
}