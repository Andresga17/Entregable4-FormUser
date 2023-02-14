import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }

  console.log(user)
    
  return (
    <div className='card-user'>
      
      <h2 className='card-user__name'>{user.first_name} {user.last_name}</h2>
      <ul className='card-user__list'>
        <li className='list__info'><span className='list__label'>Email:</span> {user.email}</li>
        <li className='list__info'><span className='list__label'>Birthday:</span> {user.birthday}</li>
      </ul>

      <button className='fa-solid fa-user-slash' onClick={handleDelete}></button>
      <button className='fa-solid fa-user-pen' onClick={handleUpdate}></button>

    </div> 
  )
}

export default UserCard
