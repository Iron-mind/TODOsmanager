import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav.js'
import Home from './components/Home/Home.js'
import AddTodo from './components/AddTodo/AddTodo.js'
import EditTodo from './components/EditTodo/EditTodo.js'
import { Switch, Route,HashRouter } from 'react-router-dom';

// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className="App">
     <HashRouter basename={process.env.PUBLIC_URL}>
    <Nav/>
     <Switch>
     <Route
       exact path='/add'
       render= {()=>
         <AddTodo/>
     }
     />
      <Route
      exact path='/'
        render={()=> <Home/>}
      />

      <Route
       path='/edit/:id?'
        render={()=>  <EditTodo />}
      />

    </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
