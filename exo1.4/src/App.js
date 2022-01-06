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
const Content = ({pt1,pt2,pt3}) => {
  return (
    <div>
    <Part partName={pt1.name} exoNum={pt1.exercises} />
    <Part partName={pt2.name} exoNum={pt2.exercises} />
    <Part partName={pt3.name} exoNum={pt3.exercises} />
    </div>
  )
}
const Total = ({exo1,exo2,exo3 }) => {
  return (
    <p> number of exercises {exo1.exercises+exo2.exercises+exo3.exercises} </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const [part1, part2 ,part3] = parts

  return (
    <div>
      <Header name = {course} />
      <Content pt1={part1} pt2={part2} pt3={part3}  />
      <Total exo1={part1} exo2={part1} exo3={part1} />
    </div>
  )
}

export default App