import React from 'react';
import './BookmarxMain.css';
import BMList from './BMList/BMList';
import AddButton from './+btn/AddButton';


class BookmarxMain extends React.Component {

  render(){

    return(

      <main className="BookMarxMain">
        <header className='title'>
          <h1>BOOKMARX</h1>
        </header>

        <BMList bookmarks={this.props.bookmarks}/>
        <AddButton handleAddButton={this.props.handleAddButton} />
      </main>
    )

  }



}

export default BookmarxMain;