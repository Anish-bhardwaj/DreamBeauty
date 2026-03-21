const SITE_NAME = "DreamBeauty";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = "/og/default-og.png",
  noIndex = false,
}) => {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} – ${SITE_NAME}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
};

export const generateJsonLd = ({ title, description, path = "", breadcrumbs = [] }) => {
  const url = `${SITE_URL}${path}`;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${title} | ${SITE_NAME}`,
    description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
  };
};

export { SITE_NAME, SITE_URL };
