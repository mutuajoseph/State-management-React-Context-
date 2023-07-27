import * as React from 'react';
import UserItem from './userItem';
import { UserContext } from '../store/userContext';

export default function UserList() {
  const { users } = React.useContext(UserContext);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
      </tr>

      {users && users.length > 0 ? (
        users.map((user: any, index: number) => (
          <UserItem key={index} user={user} />
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}>User Data does not exist</p>
        </div>
      )}
    </table>
  );
}
