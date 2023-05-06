import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ModalMsg.module.css'
import Card from '../UI/Card'


const ModalMsg = (props) => {


  const cancelModalHandler = () => {
    props.cancelHandler(null)
  }


  const Backdrop = porps => {
    return <div className={styles.backdrop} onClick={cancelModalHandler} />
  }

  const ModalOverlay = props => {
    return (
      <Card className={styles.modal}>
        <header className={styles.modalTitle}>
          {props.title ?? 'this is title'}
        </header>
        <div className={styles.modalMain}>
          <p>{props.message ?? 'this is modal message'}</p>
        </div>
        <footer className={styles.modalActions}>
          <button type='button' onClick={cancelModalHandler}>Cancel</button>
        </footer>
      </Card>
    )
  }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />,
        document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} />,
        document.getElementById('overlay-root'))}

    </>

  )
}

export default ModalMsg