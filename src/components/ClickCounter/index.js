import React, {useState} from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h1 className="header">The button has been clicked {count} times</h1>
      <p classNaae="">Click the button to incraese the count</p>
      <button className="button" onClick={handleClick}>
        Click me!
      </button>
    </div>
  )
}

export default ClickCounter
