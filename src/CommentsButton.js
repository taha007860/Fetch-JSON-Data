import React from 'react';

const CommentsButton = ({ onClick }) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      onClick('comments', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button className="button" onClick={handleButtonClick}>
      Comments
    </button>
  );
};

export default CommentsButton;
