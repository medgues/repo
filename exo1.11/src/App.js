import React, { useState } from 'react'
const StatLin = (props) => {
  return (
  <div>
    <p> {props.nm} : {props.value} </p>
  </div>)
}
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
      <StatLin nm='Good' value={props.Good} />
      <StatLin nm='Bad' value={props.Bad} />
      <StatLin nm='Neutral' value={props.Neutral} />
      <StatLin nm='All' value={props.All} />
      <StatLin nm='Average' value={props.Average} />
      <StatLin nm='Positive' value={props.Positive} />
    </div>
  )
}
const Button = ({click,name}) => {
  return (
    <button onClick={click} > {name} </button>
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
      <Button click = {Good} name= 'Good' />
      <Button click = {Neutral} name= 'Neutral' />
      <Button click = {Bad} name= 'Bad' />
      <h3> Statistics </h3>
      <Statistics  Good={good} Bad= {bad} Neutral={neutral} All={All()} Average={Average()} Positive={Positive()} />
    </div>
  )
}

export default App