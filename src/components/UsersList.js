import React from 'react'
import './UsersList.css'

export const UsersList = ({users, setUserEdit, deleteUser, setIsShowing}) => {
  return (
    <div className='user-container'>
        {users.map( user => (
            <div className='user-card' key={user.id}>
                <h3>{user.first_name} {user.last_name}</h3>
                <hr/>
                <div className="text-container">
                    <h5>EMAIL</h5>
                    <p>{user.email}</p>
                </div>
                <div className="text-container">
                    <h5>BIRTHDAY</h5>
                    <p><i className="fas fa-birthday-cake"></i> {user.birthday}</p>
                </div>
                <hr/>
                <div className="btns-container">
                    <button onClick={() => deleteUser(user.id)} className="btns-card btn-delete"><i className="far fa-trash-alt"></i></button>
                    <button onClick={() => {setUserEdit(user); setIsShowing(true)}} className="btns-card btn-edit"><i className="fas fa-edit"></i></button>
                </div>
            </div>
        ))}
    </div>
  )
}
