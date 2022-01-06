import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Good = () => {
    return (
      setGood ( good + 1 )
    )
  }
  const Neutral = () => {
    return (
      setNeutral(neutral + 1)
    )
  }
  const Bad = () => {
    return (
      setBad(bad + 1)
    )
  }
  return (
    <div>
      <h1> Give Feedbacks </h1>
      <button onClick={Good} > Good </button>
      <button onClick={Neutral} > Neutral </button>
      <button onClick={Bad} > Bad </button>
      <h3> Statistics </h3>
      <p> good : {good} </p>
      <p> neutral : {neutral} </p>
      <p> bad : {bad} </p>
    </div>
  )
}

export default App