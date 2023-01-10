const INSTAGRAM_API_BASE_URL = 'http://localhost:8080/api';
const INSTAGRAM_API_USERS_URL = `${INSTAGRAM_API_BASE_URL}/users`;

// Fetch Users
const fetchUsers = async () => {
  const response = await fetch(INSTAGRAM_API_USERS_URL, { method: 'GET' });
  const data = await response.json();
  console.log(data);
}

fetchUsers();