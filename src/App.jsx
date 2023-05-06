import { useState } from 'react'
import './App.css'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = newUser => {
    setUsers(pre => [...pre, newUser])
  }




  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  )
}

export default App
