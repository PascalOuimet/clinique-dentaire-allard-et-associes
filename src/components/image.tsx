import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type ImageVariant = "hero" | "avatar" | "icon"

interface ImageProps {
  filename: string
  alt?: string
  className?: string
  loading?: "eager" | "lazy"
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  objectPosition?: string
  variant?: ImageVariant
}

interface ImageNode {
  node: {
    relativePath: string
    childImageSharp: Partial<Record<ImageVariant, IGatsbyImageData>>
  }
}

const Image = ({
  filename,
  alt,
  className,
  loading,
  objectFit,
  objectPosition,
  variant = "hero",
}: ImageProps) => {
  const data = useStaticQuery(graphql`
    query SiteImagesQuery {
      heroImages: allFile(
        filter: { relativePath: { in: ["hero-clinique-allard.jpg"] } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              hero: gatsbyImageData(
                width: 1000
                quality: 84
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      avatarImages: allFile(filter: { relativeDirectory: { eq: "staff" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              avatar: gatsbyImageData(
                width: 180
                height: 180
                quality: 86
                layout: FIXED
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: COVER, cropFocus: ATTENTION }
              )
            }
          }
        }
      }
      iconImages: allFile(
        filter: {
          relativePath: {
            in: [
              "aesthetic.png"
              "chirurgical.png"
              "emergency.png"
              "functional.png"
              "periodontics.png"
              "prevent.png"
              "restore.png"
              "tracking-icon.png"
            ]
          }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              icon: gatsbyImageData(
                width: 32
                height: 32
                quality: 90
                layout: FIXED
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: CONTAIN }
              )
            }
          }
        }
      }
    }
  `)

  const images = [
    ...data.heroImages.edges,
    ...data.avatarImages.edges,
    ...data.iconImages.edges,
  ]
  const image = images.find((edge: ImageNode) =>
    edge.node.relativePath.includes(filename),
  )
  const imageData = image?.node.childImageSharp[variant]

  if (!imageData) {
    return null
  }

  return (
    <GatsbyImage
      alt={alt || ""}
      className={className}
      image={imageData}
      loading={loading}
      objectFit={objectFit}
      objectPosition={objectPosition}
    />
  )
}

export default Image
