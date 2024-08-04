import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const handleAddUser = () => {
  setValues({ name: '', email: '' });
  dispatch(addUser({
    id: uuidv4(),
    name: values.name,
    email: values.email
  }));
  navigate('/');
}

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "judy" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "judy@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );


export default AddUser;
