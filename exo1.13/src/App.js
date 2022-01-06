import React, { useState } from 'react'

const Rand = (max,min) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const getRandomAnec = () => {
    const a = Rand(0,6)
    return (
      setSelected (a)
    )
  }
   
  const [selected, setSelected] = useState(0)
  const [Votes,setVotes]= useState([0,0,0,0,0,0,0])
  const Copy = [...Votes]
  const Vote = () => {
    return (
      Copy[selected]+=1,
       setVotes( [    ...Copy    ] )
    )
  }
 
  

  

  return (
    <div>
     <p> {anecdotes[selected]} </p>
     <p> This has {Votes[selected]} votes </p>
      <button onClick={getRandomAnec} >Random Anecdotes </button>
      <button onClick={Vote} > Vote </button>
    </div>
  )
  }

export default App