import * as React from 'react';

const DEFAULT_AUTH_STATE = {
  isAuthenticated: false,
  isLoading: false,
  setIsLoading: () => {},
  error: () => {},
  setError: () => {},
  login: () => {},
  logout: () => {},
};

export const AuthContext = React.createContext({ DEFAULT_AUTH_STATE });

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // functions to update the state
  const login = (userCredentials: any) => {
    setIsLoading(true);
    // TODO: perform authentication logic (e.g. calling an API to validate the credentials)
    const USER_DETAILS = {
      email: 'johndoe@gmail.com',
      password: '12345678',
    };

    // simulate auth
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (USER_DETAILS?.email === userCredentials?.email) {
          if (USER_DETAILS?.password === userCredentials?.password) {
            setIsLoading(false);
            setIsAuthenticated(true);
            setError(null);
            const userLoginResponse = {
              data: {
                user: USER_DETAILS,
              },
            };
            resolve(userLoginResponse);
          } else {
            setIsLoading(false);
            setError({ message: 'Invalid Credentials! Please try again!' });
            reject('Invalid Credentials! Please try again!');
          }
        } else {
          setIsLoading(false);
          setError({ message: 'User Does not exist! Please try again!' });
          reject('User Does not exist! Please try again!');
        }
      }, 5000);
    });
  };

  const logout = () => {
    // Perform logout logic (e.g. clearing authentication tokens,)
    // simulate logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}
