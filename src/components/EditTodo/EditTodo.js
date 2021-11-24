import React from 'react';
import { connect } from 'react-redux';
import {toInProgress, removeTodo, toDone} from '../../actions/index.js'

import {useParams,Link} from 'react-router-dom'
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.
const shead={
  display: 'flex',
  flexDirection: "row",
  justifyContent: "space-around"
}

const std ={
  color:'black'
}

export function EditTodo(props) {
  let {id}= useParams()

  function changeTodo(e) {
    if(e.target.name== "progress"){
      props.toInProgress(id)
    }if(e.target.name== "done"){
      props.toDone(id)
    }if(e.target.name== "remove"){
    props.removeTodo(parseInt(id,10))

  }
  }
  //use params para el id es el que se pasa en el link /edit/:id

  if(props.todos[id-1]){
     return(<div>
       <span>
           <h2  style={std}>


           {props.todos[id-1].title}
           </h2>
           <div style={shead}> <div>Fecha: {props.todos[id-1].date}</div>   <div>Status: {props.todos[id-1].status} </div> <div>Place:{props.todos[id-1].place}</div> </div>
           <div>
               Description:
               <p>
               {props.todos[id-1].description}
               </p>
           </div>


       </span>

       <button type="button" onClick={changeTodo} name="progress">Change to inProgress</button>
       <button type="button" onClick={changeTodo} name="done">Change to Done</button>
        <button type="button" onClick={changeTodo} name="remove">Remove</button> 
     </div>)
  }else{
    return (<h2  style={std}>
    No Existe este Todo Vuelve a la pagina de inicio
    </h2>)
  }
};



function mapStateToProps(state) {
  return {
    todos: state
  };
}


export default connect(
  mapStateToProps,
  {toInProgress, removeTodo, toDone}
)(EditTodo);
