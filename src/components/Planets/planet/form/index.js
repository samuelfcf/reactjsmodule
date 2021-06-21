import { useState } from "react";

const initialState = {
  name: ''
}

const Form = (props) => {

  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    props.addSat(fields);
    event.preventDefault();
    setFields(initialState);
  }

  return (
    <>
      <div>
        <h4>Add Sat</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome: </label>
            <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}/>
            <input type="submit" />
          </form>
      </div>
    </>
  )
}

export default Form;