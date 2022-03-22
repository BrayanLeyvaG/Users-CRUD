import React from 'react'

export const UsersList = ({users, setUserEdit, deleteUser}) => {
  return (
    <div>
        {users.map( user => (
            <div className='user-container' key={user.id}>
                <h3>{user.first_name} {user.last_name}</h3>
                <div className="text-container">
                    <p>EMAIL</p>
                    <p>{user.email}</p>
                </div>
                <div className="text-container">
                    <p>BIRTHDAY</p>
                    <p>{user.birthday}</p>
                </div>
                <div className="btns-container">
                    <button onClick={() => deleteUser(user.id)} className="btns-card btn-delete"><i className="fas fa-trash-alt"></i></button>
                    <button onClick={() => setUserEdit(user)} className="btns-card btn-edit"><i className="fas fa-edit"></i></button>
                </div>
            </div>
        ))}
    </div>
  )
}
