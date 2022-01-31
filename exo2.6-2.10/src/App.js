import React, { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', id:1}
//   ]) 
//   const [newName, setNewName] = useState('')
  
//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name : newName,
//       id : persons.length + 1,
//     }
//     setPersons(persons.concat(nameObject))
//     setNewName('')

//   }

//   const handelNewName = (event) => {
//     setNewName (event.target.value)
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <div>
//           name: <input 
//           value={newName} onChange={handelNewName} 
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <p> { persons.map( name => <li key={persons.id}> {name.name} </li> ) } </p>
//     </div>
//   )
// }


// const App = () => {

//   const [persons, setPersons] = useState(
//       [
//           {name : 'peterson' , id: 1},
//           {name : 'mes'  , id :2 }
//       ]
//   )
//   const [newPersonName, setNewPersonName] = useState('')

  
//       const handelChange = (event) => {
//           setNewPersonName ( event.target.value )
//       }
//       const addNewPerson = (event) => {
//           event.preventDefault()
//               const newObject = {
//                   name : newPersonName ,
//                   id : persons.length + 1 ,
//               }
//           setPersons ( persons.concat ( newObject ) )
//           setNewPersonName ('')
//       }
//         const personsNames = persons.map ( x => x.name)
//         const Check = personsNames.includes(newPersonName) ?  window.alert( `${newPersonName} is already added to the phonebook`) : addNewPerson 
// return (
//       <div>
//           <h1> Phonebook new entry </h1>
//           <form onSubmit = {Check} >
//               <input 
//               value = {newPersonName}
//               onChange = {handelChange}
//               />
//               <button type ='submit'> submit </button>
//           </form>
//           <h2>Phonebook</h2>
//           <p>  { persons.map( (nam) => <li key={persons.id} > {nam.name} </li>   ) }   </p>
//       </div>
// )
// }

const App = () => {

  const [persons, setPersons] = useState(
    [
        {name : 'peterson' , number : 6665343 , id: 1 },
        {name : 'mes', number : 75757757  , id :2 },
        {name: 'amine' , number : 8727384872 , id : 3}
    ]
)
const [newPersonName, setNewPersonName] = useState('')
const [newPersonNum, setNewPersonNum] = useState('')
const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = persons.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(persons)
        }
    }
      const handelNameChange = (event) => {
          setNewPersonName ( event.target.value )
      }
      const handelNumChange = (event) => {
        setNewPersonNum (event.target.value)
      }
      const addNewPerson = (event) => {
          event.preventDefault()
              Check() 
      }
      const Check = () => { 
         const newObject = {
        name : newPersonName ,
        number : newPersonNum,
        id : persons.length + 1 ,
    } 
    const personsNames = persons.map ( x => x.name)
    return (
      personsNames.includes(newPersonName) ?  
      window.alert( `${newPersonName} is already added to the phonebook`) :
       (setPersons ( persons.concat ( newObject ) ), setNewPersonName (''), setNewPersonNum('')) 
    )}
return (
      <div>
          <h1> Phonebook new entry </h1>
          <h1> Add New </h1>
          <form onSubmit = {addNewPerson} >
          
              <p> name : <input 
              value = {newPersonName}
              onChange = {handelNameChange}
              /> </p>
             <p> number : <input
              type = "tel"
              value = {newPersonNum} 
              onChange = {handelNumChange}
            
              /> </p>
              <button type ='submit'> submit </button>
          </form>
          <h2> Phonebook </h2>
          <div>
            <input
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                                   {item.name} :  {item.number}
                            </div> 
                        )
                    })
                ) : (
                    persons.map((item) => {
                        return (
                            <div>
                                    {item.name}  :  {item.number}
                           </div>
                        )
                    })
                )}
        </div>
      </div>
)
}

export default App