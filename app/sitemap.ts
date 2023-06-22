import { MetadataRoute } from 'next';

 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://weather-app-deni.vercel.app',
      lastModified: new Date(),
    },
  ]
}