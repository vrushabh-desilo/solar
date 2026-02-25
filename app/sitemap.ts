import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solaris-premium.vercel.app'
  
  const routes = [
    '',
    '/about',
    '/solutions',
    '/solutions/residential',
    '/solutions/commercial',
    '/solutions/industrial',
    '/solutions/government-utility',
    '/solutions/maintenance-amc',
    '/products',
    '/projects',
    '/calculator',
    '/contact',
    '/faq',
    '/financing-subsidy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
