import React from 'react'

export const MyButton = ({text = ''}) => {
  return (
    <button onClick={() => { alert(text)}}> {text}</button>
  )
}

export default MyButton