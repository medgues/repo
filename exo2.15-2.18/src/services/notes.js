import axios from 'axios'
const baseUrl = `http://localhost:3001/persons`
  const creatContact = (newObject) => { 
      const request = axios
                        .post(baseUrl,newObject)
                        return (
                            request.then ( response => response.data )
                        )
  }
  const deleteContact = (value) => {
      const request = axios
                        .delete(`${baseUrl}/${value}`)
                        return (
                            request.then ( response => (response.data))
                        )
  }
  const updateContact = (value,newObject) => {
      const request = axios
                        .put ( `${baseUrl}/${value}`,newObject )
                        return (
                            request.then( response => response.data)
                            
                        )
  }
  export default {creatContact, deleteContact, updateContact}