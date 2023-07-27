import * as React from 'react';
import UserList from './components/usersList';
import { fetchUsers } from './services';
import { UserContext } from './store/userContext';
import './style.css';
import _ from 'lodash';
import { AuthContext } from './store/authContext';

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
  const { isAuthenticated, login, logout, isLoading } =
    React.useContext(AuthContext);

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
      {isAuthenticated && (
        <button onClick={() => logout()}>
          {isLoading ? <>Loading...</> : <>Logout</>}
        </button>
      )}
      {!isAuthenticated && (
        <button
          onClick={() =>
            login({ email: 'johndoe@gmail.com', password: '12345678' })
          }
        >
          {isLoading ? <>Loading...</> : <>Login</>}
        </button>
      )}

      {isAuthenticated ? (
        <div>
          <h1>Users Table</h1>
          <UserList />

          {/* display user Details */}
          <br />
          <br />
          {!_.isEmpty(user) && <div>{JSON.stringify(user)}</div>}
        </div>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
}

// conditionally render the table is the use is logged in
