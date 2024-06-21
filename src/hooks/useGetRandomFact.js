import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useGetRandomFact () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Get the fact when component mounts
  useEffect(() => {
    refreshFact()
  }, [])

  return {
    fact,
    refreshFact
  }
}
