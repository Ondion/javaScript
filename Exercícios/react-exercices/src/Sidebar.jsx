import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
     <aside className='SidebarClass'>
       <Link to='teste' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
       <Link to='' >Teste</Link>
     </aside>
    );
  }
}

export default Sidebar;
