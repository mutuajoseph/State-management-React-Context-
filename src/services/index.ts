const BASE_URL = `https://jsonplaceholder.typicode.com`;

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    return 'Error in fetching users';
  }
};
