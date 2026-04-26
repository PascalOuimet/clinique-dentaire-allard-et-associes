import React from "react"
import Image from "./image"

interface BulletImageProps {
  filename: string
  alt?: string
}

const BulletImage = ({ filename, alt }: BulletImageProps) => (
  <Image alt={alt} filename={filename} objectFit="contain" variant="icon" />
)

export default BulletImage
