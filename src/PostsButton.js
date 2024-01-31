import React from 'react';

const PostsButton = ({ onClick }) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      onClick('posts', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button className="button" onClick={handleButtonClick}>
      Posts
    </button>
  );
};

export default PostsButton;

