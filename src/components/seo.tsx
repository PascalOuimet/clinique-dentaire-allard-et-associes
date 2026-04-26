import React from "react"
import { graphql, useStaticQuery } from "gatsby"

interface Props {
  description?: string
  meta?: Array<Record<string, string>>
  pathname?: string
  title: string
}

const dentalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Clinique Dentaire Allard et Associés",
  description:
    "Centre dentaire familial et multidisciplinaire à Salaberry-de-Valleyfield.",
  telephone: "+14503717571",
  faxNumber: "+14503718122",
  email: "info@dentisteallard.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Notre-Dame suite 1",
    addressLocality: "Salaberry-de-Valleyfield",
    addressRegion: "QC",
    postalCode: "J6S1E7",
    addressCountry: "CA",
  },
  areaServed: "Salaberry-de-Valleyfield",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "07:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "07:30",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:30",
      closes: "14:00",
    },
  ],
}

function SEO({ description, meta = [], pathname = "/", title }: Props) {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title
  const canonical = new URL(pathname, site.siteMetadata.siteUrl).toString()
  const structuredData =
    pathname === "/"
      ? {
          ...dentalClinicSchema,
          url: site.siteMetadata.siteUrl,
        }
      : undefined
  const defaultMeta: Array<Record<string, string>> = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#0b7a82",
    },
    {
      property: "og:locale",
      content: "fr_CA",
    },
    {
      property: "og:site_name",
      content: siteTitle,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:url",
      content: canonical,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ]

  return (
    <>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="canonical" href={canonical} />
      {defaultMeta.concat(meta).map(item => (
        <meta
          content={item.content}
          key={`${item.name || item.property}-${item.content}`}
          name={item.name}
          property={item.property}
        />
      ))}
      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : null}
    </>
  )
}

export default SEO
