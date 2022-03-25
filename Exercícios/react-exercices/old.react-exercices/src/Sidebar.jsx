import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
     <aside className='sidebarClass'>
       <Link to='./' >Home</Link>
       <Link to='DadJoke' >DadJoke</Link>
       <Link to='FetchJoke' >FetchJoke</Link>
       <Link to='FetchRickAndMorty' >FetchRickAndMorty</Link>
       <Link to='Lifecycle' >Lifecycle</Link>
       <Link to='LigaDesliga' >LigaDesliga</Link>
     </aside>
    );
  }
}

export default Sidebar;
