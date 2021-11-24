import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../../actions/index.js'
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  const [input, setInput] = React.useState({

    "date": "",
    "description": "",
    "place": "",
    "title": "",


  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });


  }
  function handleSubmit(e) {
      e.preventDefault()
      props.addTodo(input)
      setInput({
        "date": "",
        "description": "",
        "place": "",
        "title": ""
      })
      //alert("ToDo Agregado, miralo en dando clic en ToDos")
  }

  return (

    <div>
    <form  className="form"   onChange={handleInputChange} onSubmit={handleSubmit}>
       <label >Title</label>
       <input type="text" onChange={handleInputChange} name="title" value={input.title}/>

       <label >Description</label>
       <textarea name="description" value={input.description} onChange={handleInputChange} rows="8" cols="80"></textarea>

       <label>Place</label>
       <input type="text"  onChange={handleInputChange} name="place" value={input.place}/>

       <label>Date</label>
       <input type="text" onChange={handleInputChange} name="date" value={input.date}/>
       <button type="submit" onClick={handleSubmit} name="button">Agreagar</button>

    </form>


    </div>
  )
};
function mapStateToProps(state) {
  return {
    todos: state
  };
}


export default connect(
  mapStateToProps,
  {addTodo}
)(AddTodo);
