import React from 'react';
import './AddBM.css';

class AddBM extends React.Component{

  state={
    title: "",
    url: "",
    desc: "",
    rating: 1
  }

  titleChange=(title)=> {
    console.log(title);
    this.setState({
      title
    })
  }

  urlChange=(url)=> {
    this.setState({
      url
    })
  }

  descChange=(desc)=> {
    this.setState({
      desc
    })
  }

  ratingChange=(rating)=> {
    this.setState({
      rating
    })
  }

  handleBookMarkSubmit=(e)=> {
    e.preventDefault();

    const bookmark = {
      title: this.state.title,
      url: this.state.url,
      description: this.state.desc,
      rating: this.state.rating
    }

    console.log(bookmark);

    const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'POST',
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$ASf20ta3QEe79M8YLF8p3.j9R1blzXNDaTkvW651ly.JhPwFY1zBi"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: "",
          url: "",
          desc: "",
          rating: 1
        });
        this.props.addBookmark(bookmark);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  render(){

    const {title, url, rating, desc} = this.state;

    return(

      <main>
        <header>
          <h2>+Add Bookmark</h2>
        </header>

        <form onSubmit={(e)=>this.handleBookMarkSubmit(e)} className="add_form">
          <label htmlFor="title">Title: </label>
          <input onChange={(e)=>this.titleChange(e.target.value)} type="text" id="title" name="title" defaultValue={title}/>

          <label htmlFor="url">URL:</label>
          <input onChange={(e)=>this.urlChange(e.target.value)} type="text" id="url" name="url" defaultValue={url}/>

          <label htmlFor="desc">Description:</label>
          <textarea onChange={(e)=>this.descChange(e.target.value)} id="desc" name="desc" placeholder="description..." defaultValue={desc}/>

          <label htmlFor="rating">Rating:</label>
          <input onChange={(e)=>this.ratingChange(e.target.value)} type="number" id="rating" name="rating" min="1" max="5" defaultValue={rating}/>

          <div className="submit/cancel_buttons">
            <button>Cancel</button>
            <button type="submit" >Save</button>
          </div>
          
        </form>

      </main>
    )

  }

}

export default AddBM;