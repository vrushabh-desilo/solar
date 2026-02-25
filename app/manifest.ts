import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Solaris Premium energy',
    short_name: 'Solaris',
    description: 'Premium solar energy solutions for a sustainable future.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#fbbf24',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
