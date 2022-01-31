import axios from 'axios'
import React, { useState,useEffect } from 'react'
import axiosProt from './services/notes.js'
import Notification from './components/Notification'
import ErrorNotif from './components/Errornotif'


const App = () => {

const [persons, setPersons] = useState([])
const [newPersonName, setNewPersonName] = useState('')
const [newPersonNum, setNewPersonNum] = useState('')
const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState('');
const [addedMessage,setAddedMessage] = useState(null)
const [errorMessage,setErrorMessage] = useState (null)
  
    useEffect(()=>{
        axios
        .get('http://localhost:3001/persons')
        .then(response =>{
            setPersons (response.data)
        })
    } ,[]) 
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
      const deletContact = (value) => {
        const tobedeletedname = persons.find((n) => n.id === value ).name
        if (window.confirm(`delete ${tobedeletedname}`)) {
          return (
            axiosProt 
              .deleteContact (value)
                .then ( axios
                        .get('http://localhost:3001/persons')
                          .then(response =>{
                          setPersons (response.data)
                          window.location.reload()
                  }) )
          )
      }}
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
    } 
    const specificPerson = persons.find ( n => n.name.toLowerCase() === newPersonName.toLowerCase())
    const personsNames = persons.map ( x => x.name.toLowerCase())
    console.log('find',specificPerson)
      Object.values(personsNames).join('').toLowerCase().includes((newPersonName).toLowerCase())
      ?  
      ( 
         (window.confirm(`${newPersonName} is already in the phoneBook, update ${newPersonName}'s phone number ?`)) ?
          (axiosProt
           .updateContact (specificPerson.id, newObject)
            .then(returnedNote => {
             setPersons(persons.map(note => note.id !== specificPerson.id ? note : returnedNote))},
             setNewPersonName ('') , 
             setNewPersonNum(''),
             setAddedMessage (
                 `${specificPerson.name} number has been updated`
             ),
             setTimeout(()=>{
                setAddedMessage(null)
             },5000)
           ).catch( error => {
            setErrorMessage(
                `${specificPerson.name} already been deleted from the phonebook `
            )
            setTimeout(()=> {
                setErrorMessage (null)
                window.location.reload()
            },5000)
         }
         ) 
            )    : setPersons (persons) 
      ) :
       ( axiosProt 
            .creatContact (newObject)
              .then (initialPerson => {
                setPersons(persons.concat(initialPerson))},
                setNewPersonName ('') , 
                setNewPersonNum(''),
                setAddedMessage (
                    ` ${newObject.name} has been added to the phone book `
                ),
                setTimeout (()=>{
                    setAddedMessage ( null)
                },5000)
            ))
    }
return (
      <div>
          <h1> Phonebook new entry </h1>
          <h1> Add New </h1>
          <Notification message={addedMessage}/>
          <ErrorNotif msg ={errorMessage}/>
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
                            <div key={item.name}>
                                   {item.name} :  {item.number} 
                                   <button onClick = { ()=>deletContact(item.id) } > delete </button>
                            </div> 
                        )
                    })
                ) : (
                    persons.map((item) => {
                        return (
                            <div key={item.name}>
                                    {item.name}  :  {item.number} 
                                    <button onClick = { ()=>deletContact(item.id) } > delete </button>
                           </div>
                        )
                    })
                )}
        </div>
      </div>
)
}

export default App


