import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import UserList from "./userList";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setTimeout(async () => {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>Kullanici Listesi</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
