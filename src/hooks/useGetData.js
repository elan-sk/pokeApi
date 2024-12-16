import { useEffect, useState } from "react";

export const useGetData = (urlApi, secondFetch) => {
  const [data, setData] = useState([]); // Datos finales
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(false); // Estado de error

  const getData = async () => {
    try {
      setLoading(true); // Inicia el estado de carga
      const res = await fetch(urlApi); // Primer fetch
      if (!res.ok) throw new Error(`Error al obtener datos principales: ${res.status}`);
      const firstData = await res.json(); // Parseo de datos

      // Verificar si se debe encadenar un segundo fetch
      if (secondFetch && firstData.results) {
        const promises = firstData.results.map(async (result) => {
          const res = await fetch(result[secondFetch]);
          if (!res.ok) throw new Error(`Error al obtener detalle: ${res.status}`);
          const detail = await res.json();
          return detail;
        });
        const secondResults = await Promise.all(promises);
        setData(secondResults); // Establecer datos del segundo fetch
      } else {
        setData(firstData.results || firstData); // Usar `results` o los datos originales
      }

      setError(false); // No hay error
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setError(true); // Manejar el error
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  useEffect(() => {
    getData(); // Ejecutar la función cuando cambie `urlApi`
  }, [urlApi, secondFetch]);

  return { data, loading, error }; // Retornar estados
};
