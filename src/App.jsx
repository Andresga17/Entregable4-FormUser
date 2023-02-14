import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isOpen, setIsOpen] = useState(true)

 const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect (() => {
    getAllUsers()
  }, [])

  //Se debe ejecutar en un formulario
  const createNewUser = (data) => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const UpdateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
      })
      .catch(err => console.log(err))
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
 
  // console.log(users)

  return (
    <div className="App">
      <button onClick={handleOpen} className='app__btn-form'>Open Form</button>
      <div className={`app__form ${isOpen && 'app__form-visible'}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          UpdateUserById={UpdateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className='container'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpen={handleOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
