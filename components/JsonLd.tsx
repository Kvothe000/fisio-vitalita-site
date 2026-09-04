import { siteInfo } from '@/config/site-info';

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician", // Ou 'MedicalClinic' ou 'HealthAndBeautyBusiness'
        "name": siteInfo.name,
        "image": "https://www.fisiovitalita.com.br/logo.png", // Placeholder, idealmente deve ser a URL real
        "@id": "https://www.fisiovitalita.com.br",
        "url": "https://www.fisiovitalita.com.br",
        "telephone": siteInfo.contact.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": `${siteInfo.address.street}, ${siteInfo.address.number}`,
            "addressLocality": siteInfo.address.city,
            "addressRegion": siteInfo.address.state,
            "postalCode": siteInfo.address.zip,
            "addressCountry": "BR"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
