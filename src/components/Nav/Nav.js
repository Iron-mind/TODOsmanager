import React from 'react';
import {Link} from 'react-router-dom'

export function Nav() {
  return (

    <nav className='navbar ' >
      <Link to='/'>
      <span >

        <h1 className="title">
          TODOS
        </h1>
        </span>
      </Link>
      <Link to='/add'>
      <span >
        <h3 className="addt">
          Add Todo
        </h3>
        </span>

      </Link>


    </nav>
  )
};

export default Nav;
