import React, { useState } from "react";
import { data } from "../data/data.js";
import styles from "./Accordion.module.css";
// single selection
// multiple selection

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let cpyMultiple = [...multiple];
    const findId = cpyMultiple.indexOf(id)
    console.log(findId);
    if (findId === -1) {
      cpyMultiple.push(id)
    } else {
      cpyMultiple.splice(findId, 1)
    }
    console.log(cpyMultiple);
    setMultiple([...cpyMultiple])
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setMultiSelection(!multiSelection)}>
        {multiSelection ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>

      <div className={styles.accordion}>
        {data && data.length > 0 ? (
          data.map(item => (
            <div className={styles.item} key={item.id}>
              <div
                className={styles.title}
                onClick={
                  multiSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              
                { multiSelection ?  
                     multiple.indexOf(item.id) !== -1 &&
                        <div className={styles.content}>{item.answer}</div>
                    : selected === item.id &&
                        <div className={styles.content}>{item.answer}</div>
        }
                  
            </div>
          ))
        ) : (
          <div>Error message</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
