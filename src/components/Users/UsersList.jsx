import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

const UsersList = (props) => {
  const [sortBy, setSortBy] = useState('none')


  const sortFunc = () => {
    return (
      sortBy === 'name' ? (a, b) => a.username.localeCompare(b.username) :
        sortBy === 'age' ? (a, b) => a.age - b.age :
          undefined
    )
  }




  return (
    <Card>
      <div className={styles.orderby}>
        <p>Order by:</p>
        <button onClick={() => setSortBy('none')}>Date Added</button>
        <button onClick={() => setSortBy('name')}>Name</button>
        <button onClick={() => setSortBy('age')}>Age</button>

      </div>
      <ul className={styles.usersList}>
        {[...props.users]?.sort(sortFunc()).map(user => (
          <li key={user.id}>{user.username} ({user.age} years old) </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList