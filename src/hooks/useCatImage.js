import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageSrc, setImageSrc] = useState()

  // Sets the first word of the fact and utilize it to get Image SRC
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    setImageSrc(`https://cataas.com/cat/says/${firstWord}`)
  }, [fact])

  return { imageSrc }
}
