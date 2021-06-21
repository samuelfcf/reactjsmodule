import { useState } from "react";

const initialState = {
  name: '',
  description: '',
  img_url: '',
  link: '',
}

const Form = (props) => {

  // lembrando que fields é um objeto.
  const [fields, setFields] = useState(initialState)
  
  // handleChance genérico que servirá para qualquer campo do form! 
  const handleFieldsChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setFields(initialState)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
      </div>
      <div>
        <label htmlFor="description">description: </label>
        <textarea id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
      </div>
      <div>
        <label htmlFor="img_url">img_url: </label>
        <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
      </div>
      <div>
        <label htmlFor="link">link: </label>
        <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
      </div>
      <br />
      <input type="submit" />
    </form>
    </>
  )
}

export default Form;