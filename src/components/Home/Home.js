import React from 'react';

import Todos from '../Todos/Todos.js'


const sHome = {
  display:"flex",
  justifyContent: "space-around",
  flexDirection:"row"
}

export function Home() {
  return (

    <div style={sHome} className="todoHome">
     <Todos status='Todo' />
     <Todos status='InProgress'/>
     <Todos status='Done'/>

  </div>

  )
};

export default Home;
