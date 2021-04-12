export const get = async (path: string) => {
  const url = `${process.env.REACT_APP_BASE_URL}${path}&key=${process.env.REACT_APP_PUBLIC_KEY}`;

  const response = await fetch(url);
  const preparedResponse = await response.json();

  if (response.status >= 400) {
    throw new Error(preparedResponse);
  }
  return preparedResponse;
};
