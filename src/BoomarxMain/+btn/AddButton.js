import React from 'react';



function AddButton(props) {


  return(
    <button onClick={()=>props.handleAddButton()} >+Add Bookmark</button>
  )
}

export default AddButton;