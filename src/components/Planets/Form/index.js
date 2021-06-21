import { useState } from "react";


const Form = (props) => {

  const [name, setName] = useState('')
  
  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    props.addPlanet({
      name: name
    });
    event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" value={name} onChange={handleChange}/>
      </div>
      <br />
      <input type="submit" />
    </form>
    </>
  )
}

 export default Form;