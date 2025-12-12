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
  'Brand': { icon: IconBrandAdobe, label: 'Brand' },
  'Packaging': { icon: IconShoppingCart, label: 'Packaging' },
  'Motion': { icon: IconPrinter, label: 'Motion' },
  'Print': { icon: IconPlant, label: 'Print' }
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
    tags: ['Brand', 'Packaging', 'Motion'],
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
    tags: ['Brand', 'Print'],
    images: [
      img1,
      img2,
      img3,
      img4,
    ]
  }
]