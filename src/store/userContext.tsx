import * as React from 'react';

const DEFAULT_STATE = {
  user: null,
  users: [],
  setUser: (user: any) => {},
  setUsers: (users: any) => {},
};

export const UserContext = React.createContext(DEFAULT_STATE);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
