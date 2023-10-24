import { useState } from 'react';
import './CommentPage.scss';

export const CommentPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  // const [comments, setComments] = useState<Comment[]>([]);

  const MY_API_KEY = '111111';
  const url = 'https://api.jsonbin.io/v93746/b';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      name: name,
      comment: comment,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': MY_API_KEY, 
        },
      });

      if (response.ok) {
        const responseText = await response.text();


        console.log(responseText)
      } else {
        console.error('Failed to post comment')
      }
    }
    catch (error) {
      console.error('An error occurred:', error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add_comment">
      <label>
        Name
        <input
          type="text"
          value={name}
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>Comment
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          name="comment"
        />
      </label>
      <button type="submit" value="Add Comment">Add Comment</button>
    </form>
  );
};