import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import  UsersForm  from './components/UsersForm';
import { UsersList } from './components/UsersList';

function App() {
  const [users, setUsers] = useState([])
  const [userEdit, setUserEdit] = useState(null)
  const [isShowing, setIsShowing] = useState(false)


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
      {isShowing && <UsersForm getData={getData} userEdit={userEdit} setIsShowing={setIsShowing} isShowing={isShowing} setUserEdit = {setUserEdit}/>}
      <div className='header'>
        <h1>Usuarios</h1>
        <button onClick={() =>setIsShowing(!isShowing)}><i className="fas fa-plus"></i> New user</button>
      </div>
      <UsersList users={users} setUserEdit={setUserEdit} deleteUser={deleteUser} setIsShowing={setIsShowing}/>
    </div>
  );
}

export default App;
