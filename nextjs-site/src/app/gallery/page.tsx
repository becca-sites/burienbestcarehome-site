import type { Metadata } from 'next'
import GalleryContent from './gallery-content'

export const metadata: Metadata = {
  title: 'Gallery | See Our Home & Community Events',
  description:
    'Take a virtual tour of Burien Best Care Home. See our private care suites, beautiful common areas, garden spaces, and community events like our Spring Planting Party.',
  openGraph: {
    title: 'Gallery | See Our Home & Community Events',
    description:
      'Take a virtual tour of Burien Best Care Home. See our private care suites, beautiful common areas, garden spaces, and community events.',
    url: 'https://burienbestcarehome.com/gallery',
    type: 'website',
  },
}

export default function GalleryPage() {
  return <GalleryContent />
}
