import React, {useState} from "react";
import ReactJson from "react-json-view";

const JsonConfig = {
  items: [
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    },
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    },
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    },
    {
      'imageURL': 'https://cdn.pixabay.com/photo/2022/04/10/16/44/wood-7123804__340.jpg'
    }
  ]
}



const JsonViewer = () => {
  

  const onEdit = e => {
    this.setState({ src: e.updated_src });
  };

  const onDelete = e => {
    this.setState({ src: e.updated_src });
  };
  const onAdd = e => {
    this.setState({ src: e.updated_src });
  };
  return (
    <div className="w-10/12 ">
      <ReactJson
        src={ JsonConfig }
        theme="monokai"
        onEdit={ onEdit }
        onDelete={ onDelete }
        displayDataTypes={ false }
        onAdd={ onAdd }
      />
      
      
    </div>
  )
}


export default JsonViewer;