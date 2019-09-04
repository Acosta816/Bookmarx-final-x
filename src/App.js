import React from 'react';
import './App.css';
import BookmarxMain from './BoomarxMain/BookmarxMain';
import AddBM from './AddBM/AddBM';



class App extends React.Component {

  state= {
    bookmarks: [],
    addBM: false,
  }

  handleFetch=()=> {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$ASf20ta3QEe79M8YLF8p3.j9R1blzXNDaTkvW651ly.JhPwFY1zBi",
        "Content-Type": "application/json"
      }
    };

    fetch(url,options)
    .then(res=> {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again');
      }
      return res.json();
    })
    .then(data=> {
      console.log(data);
      this.setState( {
        bookmarks: data
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });


  }

  componentDidMount() {
    console.log('component has mounted');
    this.handleFetch();
  }

  handleAddButton=()=> {
    this.setState( {
      addBM: !this.state.addBM
    })
  }

  addBookmark=(bookmark)=>{
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      addBM: false
    })
  }

  render(){

    return(

      <main>
        <header>
          Bookmarx(root)
        </header>

        { this.state.addBM? <AddBM addBookmark={this.addBookmark}/>: <BookmarxMain bookmarks={this.state.bookmarks} handleAddButton={this.handleAddButton} /> }

      </main>

    )

  }

}

export default App;

// apikey:      $2a$10$ASf20ta3QEe79M8YLF8p3.j9R1blzXNDaTkvW651ly.JhPwFY1zBi