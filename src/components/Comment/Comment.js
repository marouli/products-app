import React from 'react';
import './Comment.css';

function Comment(props) {

  let data = props.data;

  return (
    <div className="comment">
      <p className="comment__content">{data}</p>
    </div>
  );
}

export default Comment;