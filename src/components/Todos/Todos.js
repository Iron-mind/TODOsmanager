import React from 'react';
import Todo from '../Todo/Todo.js'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
const stodos = {
//  margin:"20px 20px  100px 100px",

  marginTop: "30px",

  bordrWidth:"1px",
  borderColor:"blue"
}
export function Todos(props) {
  return (
    <div style={stodos}>
       <span>
          {props.status}
       </span>

      {props.todos.map(td=>{
        //
        if (td.status== props.status) {
           return <Link to={`/edit/${td.id}`}><Todo title={td.title} /> </Link>
        }
      } )}
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
  null
)(Todos);
