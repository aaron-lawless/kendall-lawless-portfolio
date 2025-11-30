import './Navigation.scss'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export default function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">LAWLESS</Link>

        <NavigationMenu>
          <NavigationMenuList className="nav-menu-list">
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-link" href="projects">
                WORK
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-link" href="about">
                ABOUT
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-link" href="process">
                PROCESS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-link" href="contact">
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
    </nav>
  )
}