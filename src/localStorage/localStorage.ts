// Function that saves token in localStorage
export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem('token', token);
};

// Function that recuperates the token from localStorage
export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');

  // If no token present send null
  if (!token) {
    return null;
  }

  // Else send data
  return { token };
};

// Function to delete token when disconnecting
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};
