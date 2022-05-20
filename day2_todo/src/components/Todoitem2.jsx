import React from 'react'
import styles from'./todo2.module.css'

export const Todoitem2 = ({todow,onDelete}) => {
  return (
    <div className={styles.todo2_box} key={todow.id}>
          <input type="checkbox" />
          <div key={todow.id}>{todow.value}</div>
          <button onClick={() => onDelete(todow.id)}>Delete</button>
        </div>
  )
}
