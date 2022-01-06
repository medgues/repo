import React from 'react'
const Header = ({name})=>{
  return (
    <h1> {name} </h1>
  )
}
const Part = ({partName,exoNum}) => {
  return (
    <p> {partName} {exoNum} </p>
  )
}
const Content = ({pt1,pt2,pt3,exe1,exe2,exe3}) => {
  return (
    <div>
    <Part partName={pt1} exoNum={exe1} />
    <Part partName={pt2} exoNum={exe2} />
    <Part partName={pt3} exoNum={exe3} />
    </div>
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
      <Content pt1={part1} pt2={part2} pt3={part3} exe1={exercises1} exe2={exercises2} exe3={exercises3} />
      <Total exo1={exercises1} exo2={exercises2} exo3={exercises3} />
    </div>
  )
}

export default App