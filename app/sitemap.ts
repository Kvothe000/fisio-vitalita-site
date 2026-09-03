import { MetadataRoute } from 'next';
import { siteInfo } from '@/config/site-info';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteInfo.siteUrl;
    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/equipe`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/estrutura`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${baseUrl}/agendamento`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/servicos/fisioterapia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/pilates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/acupuntura`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/massoterapia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/terapias-holisticas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/fisioterapia-forense`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/servicos/nutricao`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ];
}