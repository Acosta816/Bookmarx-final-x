import React from 'react';
import './BMList.css';
import BM from '../BM/BM';

class BMList extends React.Component {

  render(){

    const bookmarks = this.props.bookmarks.map((bm,index)=> {
      return (
        <li key={bm.id}>
          <BM key={bm.id} bookmark={bm}/>
        </li>
          
      )
    })

    return(

      <main className="BMList">
        <header>
          <h3>Bookmarks Library</h3>
        </header>
        <ul>
          {bookmarks}
        </ul>    
      </main>
    )
  }
}

export default BMList;