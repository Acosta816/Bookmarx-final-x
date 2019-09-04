import React from 'react';
import './BM.css';


class BM extends React.Component {

  render(){
    const {description, id, rating, title, url} = this.props.bookmark;

    return(

      <main className="BM">
        <header>
          <h4>{title}</h4>
        </header>
        <p>rating: {rating}</p>
        <p>{description}</p>
        <a href={url} target="_blank">{url}</a>
      </main>
    )

  }


}

export default BM;