import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import  UsersForm  from './components/UsersForm';
import { UsersList } from './components/UsersList';

function App() {
  const [users, setUsers] = useState([])
  const [userEdit, setUserEdit] = useState(null)
  console.log(userEdit)


  function getData() {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  useEffect(() => {
    getData()
  }, [])
  
  function deleteUser(id) {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getData())
  }

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <UsersForm getData={getData} userEdit={userEdit}/>
      <UsersList users={users} setUserEdit={setUserEdit} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
