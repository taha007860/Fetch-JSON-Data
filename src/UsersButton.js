import React from 'react';

const UsersButton = ({ onClick }) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      onClick('users', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button className="button" onClick={handleButtonClick}>
      Users
    </button>
  );
};

export default UsersButton;