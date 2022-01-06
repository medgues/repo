import React, { useState } from 'react'
const Statistics = (props) => {
  if (props.All === 0) {
    return (
      <div>
        <p> No Feedback Has been Given </p>
      </div>
    )
  }
  return (
    <div>
      <p> good : {props.Good} </p>
      <p> neutral : {props.Neutral} </p>
      <p> bad : {props.Bad} </p>
      <p> all : {props.All} </p>
      <p> average : {props.Average} </p>
      <p> positive : {props.Positive} </p>
    </div>
  )
}
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
  const All =() => {
    return (
      bad+good+neutral
    )
  }
  const Average = () => {
    return (
      ((good-bad)/All())
    )
  }
  const Positive = () => {
    return (
      (good*100/All())
    )
  }
  return (
    <div>
      <h1> Give Feedbacks </h1>
      <button onClick={Good} > Good </button>
      <button onClick={Neutral} > Neutral </button>
      <button onClick={Bad} > Bad </button>
      <h3> Statistics </h3>
      <Statistics Good={good} Bad={bad} Neutral={neutral} All={All()} Average={Average()} Positive={Positive()} />
    </div>
  )
}

export default App