
export function useGoBack(navigate) {
  const handleGoBack = () => {
    navigate(-1);
  };

  return handleGoBack
}

