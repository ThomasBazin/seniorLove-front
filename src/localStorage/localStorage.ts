// Function that saves token in localStorage
export const setTokenAndDataInLocalStorage = (
  token: string,
  name: string,
  picture: string
) => {
  localStorage.setItem('token', token);
  localStorage.setItem('name', name);
  localStorage.setItem('picture', picture);
};

// Function that recuperates the token from localStorage
export const getTokenAndDataFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const picture = localStorage.getItem('picture');

  // If no token present send null
  if (!token) {
    return null;
  }

  // Else send data
  return { token, name, picture };
};

// Function to delete token when disconnecting
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('picture');
};
