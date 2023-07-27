import * as React from 'react';
import { UserContext } from '../store/userContext';

export default function UserItem({ user }: any) {
  const { setUser } = React.useContext(UserContext);

  const handleUserDetailsClick = (userData: any) => {
    console.log('user Details', userData);

    setUser(userData);

    // get the id of the user
    // make a call to the api to fetch user by their id
    // reroute the user to a page that has more information about them
  };

  return (
    <tr>
      <td>{user?.name}</td>
      <td>{user?.username}</td>
      <td>{user?.email}</td>
      <td>{user?.address?.street}</td>
      <button onClick={() => handleUserDetailsClick(user)}>User Details</button>
    </tr>
  );
}
