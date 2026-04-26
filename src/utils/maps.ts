import { useEffect, useState } from "react"

const query =
  "Clinique%20dentaire%20Allard%20et%20Associ%C3%A9s%2C%20Salaberry-de-Valleyfield"

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`
export const appleMapsUrl = `https://maps.apple.com/?q=${query}`

const isIos = () =>
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent)

export const useMapsUrl = () => {
  const [mapsUrl, setMapsUrl] = useState(googleMapsUrl)

  useEffect(() => {
    setMapsUrl(isIos() ? appleMapsUrl : googleMapsUrl)
  }, [])

  return mapsUrl
}
