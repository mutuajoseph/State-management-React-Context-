import * as React from 'react';
import UserList from './components/usersList';
import { fetchUsers } from './services';
import { UserContext } from './store/userContext';
import './style.css';
import _ from 'lodash';

// TUESDAY
// -> useEffect Hook
// -> fetch Data using Fetch api, Promises (async/ await // .then .catch)

// WEDNESDAY
// -> State management (Context, Zustand)
// -> Authentication (login and register)

// THURSDAY
// -> Combine all the concepts to a working application ??

// TABLE => Has user Data
// Display user data when the component loads => ??

export default function App() {
  const { user, users, setUsers } = React.useContext(UserContext);

  React.useEffect(() => {
    // execute the get users functions
    getUsers();
  }, []);

  const getUsers = () => {
    fetchUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Users Table</h1>
      <UserList />

      {/* display user Details */}
      <br />
      <br />
      {!_.isEmpty(user) && <div>{JSON.stringify(user)}</div>}
    </div>
  );
}
