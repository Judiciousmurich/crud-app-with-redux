import React, { useState } from 'react'
import TextField from '../../components/TextField'

const AddUser = () => {
  const[values, setValues] = useState({name:'', email:''});
  return (
    <>
    <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}/>
        <TextField 
        label= "Email"
        value={values.email}
        onChange={(e) => setValues({...values, name:e.target.value})}
        inputProps={{ type:'text', placeholder: 'judy@gmail.com'}}
        />
    </>

  )
}

export default AddUser