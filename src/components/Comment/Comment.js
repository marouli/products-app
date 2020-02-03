import React from 'react';
import './Comment.css';

function Comment(props) {

  let data = props.data;

  return (
    <div className="comment">
      {/* <img className="author__avatar" src={author.avatarUrl}></img> */}
      <p className="comment__content">{data}</p>
    </div>
  );
}

export default Comment;