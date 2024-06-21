import { useCatImage } from './hooks/useCatImage'
import { useGetRandomFact } from './hooks/useGetRandomFact'

export function App () {
  const { fact, refreshFact } = useGetRandomFact()
  const { imageSrc } = useCatImage({ fact })

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      <button onClick={refreshFact}>Get new fact</button>

      {
        imageSrc &&
          <img src={imageSrc} alt='Prettiest cat in the world' />
      }
    </main>
  )
}
