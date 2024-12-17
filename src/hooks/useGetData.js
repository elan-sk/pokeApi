import { useEffect, useState } from 'react';

export const useGetData = (urlApi, secondFetch) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch(urlApi)
      if (!res.ok) throw new Error(`Error al obtener datos principales: ${res.status}`);
      const firstData = await res.json()

      if (secondFetch && firstData.results) {
        const promises = firstData.results.map(async (result) => {
          const res = await fetch(result[secondFetch]);
          if (!res.ok) throw new Error(`Error al obtener detalle: ${res.status}`)
          const detail = await res.json()
          return detail
        });
        const secondResults = await Promise.all(promises)
        setData(secondResults)
      } else {
        setData(firstData.results || firstData)
      }
      setError(false)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [urlApi, secondFetch])

  return { data, loading, error }
}
