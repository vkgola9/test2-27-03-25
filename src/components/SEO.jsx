import { Helmet } from "react-helmet-async";
import { useSettings } from './SettingsContext';

const SEO = ({ title, description }) => {
  const settings = useSettings();
  const pageUrl = settings.URL + window.location.pathname;
  const titleCity = (settings.IncludeAreasInTitle === 1) ? (settings.City + ((settings.ServiceAreas.length > 0) ? " | " + settings.ServiceAreas.join(" | ") : "")) : settings.City;

  //const structuredData = {"@context": "https://schema.org", "@type": "WebSite", "name": settings.Company, "url": settings.URL};

  //TODO: follow similar to "Kent's Mechanical" below
  const structuredData2 = {
    "@context": {"@vocab": "http://schema.org/"},
    "@graph": [
      {
        "@id": settings.URL,
        "@type": "Organization",
        "name": settings.Company,
        "url": settings.URL,
        "logo": `${settings.URL}/logod.png`,
        "description": settings.CompanyTagline,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": settings.Phone,
          "email": settings.Email
        }
      },
      {
        "@type": "LocalBusiness",
        "parentOrganization": { "name" : settings.MyCompanyLegalEntity }, "name" : settings.Company,"image" : `${settings.URL}/logod.png`,
        "address": {
          "@type" : "PostalAddress","streetAddress": settings.Street,"addressLocality": settings.City,"addressRegion": settings.StateAbbr,"postalCode": settings.Zip,
          "telephone": settings.Phone,"addressCountry": settings.Country
        },
        "openingHours": [settings.BusinessHours.Schedule1,settings.BusinessHours.Schedule2,settings.BusinessHours.Schedule3]
      }
    ]
  };
  
  const completeTitle = title + " | " + titleCity + ", " + settings.StateAbbr;

  return (
    <Helmet>
      <title>{completeTitle}</title>
      <meta charset="UTF-8" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${pageUrl}`} />
      <link rel="icon" href={settings.URL + "/favicon.ico"} type="image/x-icon" />
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={`${pageUrl}`} />
      <meta property="og:title" content={completeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={settings.Company} />
      <meta property="og:image" content={`${settings.URL}/img/c-ac-t.webp`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={completeTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={`${settings.URL}/img/c-ac-t.webp`} />
      <meta name="twitter:creator" content={settings.TwitterHandle} />
      <meta name="twitter:site" content={settings.TwitterHandle} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Add any other meta tags here */}
      {/*<meta name="facebook-domain-verification" content="lact1phuwdzwgv7v5gu1vpw50aalp8" /><
      <meta name="google-site-verification" content="ZuxpGz3f_A5mIRxoca8txpgDqa_DFrDXV8ptmkvgnjk" />
      <meta name="p:domain_verify" content="cd652f997bb4734c20771f66827b7e37"/>*/}

      /* for Sitename in SERP */
      <script type="application/ld+json>">{JSON.stringify(structuredData2)}</script>
    </Helmet>
  );
};

export default SEO;
