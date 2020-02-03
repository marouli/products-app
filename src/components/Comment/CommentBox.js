import React, {useState} from 'react';
import Comment from './Comment';
import './CommentBox.css';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get('comment')
    if (comment === "") {
        alert("Please write a comment first!");
        return false;
    }
      setComment(comment)
      event.target.reset();
      const newComments = comments.concat([comment]);
      setComments(newComments)
  }

  return (
    <div className="c-comment-box">
      <form className="c-comment-form" name="commentForm" id="commentForm" autoComplete="off" onSubmit={handleSubmit}>
        <input 
          className="c-comment-input" 
          type="text" 
          placeholder="Write a comment..." 
          id="comment" 
          name="comment"
        />
        <div className="c-comment-btn__container">
          <button className="c-comment-submit-btn" type="submit">Add Comment</button>
        </div>
      </form>
      <div className="c-comment-list">
        {comments.length>0 && comments.length===1 &&
          <p className="c-comment-box__header">{comments.length} Comment</p>
        }
        {comments.length>1 &&
          <p className="c-comment-box__header">{comments.length} Comments</p>
        }
        {comments.map(comment =>
          <Comment
            data={comment}
          />)}
      </div>
    </div>
  );
}

export default CommentBox;
