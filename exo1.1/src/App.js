import React from 'react'
const Header = ({name})=>{
  return (
    <h1> {name} </h1>
  )
}
const Content = ({partName,exoNum}) => {
  return (
    <p> {partName} {exoNum} </p>
  )
}
const Total = ({exo1,exo2,exo3 }) => {
  return (
    <p> number of exercises {exo1+exo2+exo3} </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
      <Content partName={part1} exoNum={exercises1} />
      <Content partName={part2} exoNum={exercises2} />
      <Content partName={part3} exoNum={exercises3} />
      <Total exo1={exercises1} exo2={exercises2} exo3={exercises3} />
    </div>
  )
}

export default App