import React, { useState } from 'react'

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow(){
    setIsShow(!isShow)
  }

  function toggleDone(){
    setIsDone(!isDone)
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>
        {word.eng}
      </td>
      <td>
        {isShow && word.kor}
      </td>
      <td>
        <button onClick={toggleShow}>{isShow ? "Hide" : "Check"}</button>
        <button className='btn_del'>Delete</button>
      </td>
    </tr>
  )
}

export default Word;