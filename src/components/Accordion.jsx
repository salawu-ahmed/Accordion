import React, { useState } from 'react'
import  {data}  from '../data/data.js'
// single selection
// multiple selection

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const handleSingleSelection = (id) => {
      console.log(id);
      setSelected(id === selected ? null : id)
    }
  return (
    <div className='wrapper'>
      <div className="accordion">
        {
            data && data.length > 0 ? (
                data.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="title" onClick={() => handleSingleSelection(item.id)}>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {
                          selected === item.id ? (
                            <div className="content">{item.answer}</div>
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
