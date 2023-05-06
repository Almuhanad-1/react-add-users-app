import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ModalMsg from '../Modal/ModalMsg';

const AddUser = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log('first')
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty values).'
      })
      return
    } else if (+enteredAge < 1) {
      console.log('second')
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age ( > 0 ).'
      })
      return
    }

    props.onAddUser({
      id: Math.round(Math.random() * 1000),
      username: enteredName,
      age: enteredAge
    })

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }


  return (
    <Card>
      {error && <ModalMsg title={error.title} message={error.message} cancelHandler={setError} />}

      <form className={styles.form} onSubmit={submitHandler} >

        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />

        <label htmlFor="age">Age (by years)</label>
        <input type="number" id="age" ref={ageInputRef} />

        <button>Add Username</button>
      </form>
    </Card>

  )
}

export default AddUser