import React from 'react'
import Course from './components/Course'

const App = ({course}) => {

  const name = course.map ( (x) => 
  <li key={x.id} > <h1>{x.name}</h1>
      {
     course[x.id-1].parts.map( (y) => <ul key ={y.id}> <li> {y.name} : {y.exercises} </li> </ul> )
      }
      Total of {course[x.id-1].parts.reduce ( (sum,num) => (sum + num.exercises),0 ) } exercises
  </li> )
  
  return (
    <div>
      <Course  course={name} /> 
    </div>
  )
}

export default App