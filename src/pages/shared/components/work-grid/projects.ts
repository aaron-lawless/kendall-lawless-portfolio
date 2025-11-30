import img1 from '../../../super-natural/assets/Supernatural-MINIMALportfolio.png'
import img2 from '../../../super-natural/assets/Supernatural-MINIMAL2portfolio.png'
import img3 from '../../../super-natural/assets/Supernatural-MINIMAL3portfolio.png'
import img4 from '../../../super-natural/assets/Supernatural-MINIMAL4portfolio.png'
import { 
  IconBrandAdobe, 
  IconShoppingCart, 
  IconPrinter,
  IconPlant
} from '@tabler/icons-react'

// Tag configuration with Tabler icons
export const TAG_CONFIG = {
  'Branding': { icon: IconBrandAdobe, label: 'Branding' },
  'Package Design': { icon: IconShoppingCart, label: 'Package Design' },
  'Illustration': { icon: IconPrinter, label: 'Illustration' },
  'Social Impact Design': { icon: IconPlant, label: 'Social Impact Design' }
} as const

// Available tags that projects can use
export const AVAILABLE_TAGS = Object.keys(TAG_CONFIG) as ProjectTag[]

export type ProjectTag = keyof typeof TAG_CONFIG

export interface Project {
  //Id is a unique identifier for each project (also used for routing)
  id: string
  title: string
  subtitle: string
  tags: ProjectTag[]
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'super-natural',
    title: 'Super Natural',
    subtitle: 'COFFEE BRANDING & E-COMMERCE',
    tags: ['Branding', 'Package Design', 'Illustration'],
    images: [
      img1,
      img2,
      img3,
      img4,
    ]
  },
    {
    id: 'gilkf',
    title: 'Gilked',
    subtitle: 'FRESH BRAND IDENTITY FOR TAMPA CUSTOM HOME BUILDER.',
    tags: ['Branding', 'Illustration'],
    images: [
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop',
    ]
  }
]