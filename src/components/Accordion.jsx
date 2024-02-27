import React, { useState } from 'react'
import  {data}  from '../data/data.js'
import styles from './Accordion.module.css'
// single selection
// multiple selection

const Accordion = () => {
    const [selected, setSelected] = useState([])
    const handleSingleSelection = (id) => {
      console.log(id);
      // setSelected(id === selected ? null : id)      
      setSelected(selected.includes(id) ? selected.filter(val => val !== id) : [...selected, id])
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {
            data && data.length > 0 ? (
                data.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.title} onClick={() => handleSingleSelection(item.id)}>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {
                          selected.includes(item.id) ? (
                            <div className={styles.content}>{item.answer}</div>
                          ) : (
                            null
                          )
                        }
                    </div>
                ))
            ) : (
                <div>Error message</div>
            )
        }
      </div>
    </div>
  )
}

export default Accordion
