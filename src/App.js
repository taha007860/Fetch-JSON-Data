import React, { useState } from 'react';
import './App.css';
import UsersButton from './UsersButton';
import PostsButton from './PostsButton';
import CommentsButton from './CommentsButton';
import DataTable from './DataTable'; // Import the DataTable component

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [postData, setPostData] = useState([]);

  const handleButtonClick = async (buttonName, data) => {
    setActiveButton(buttonName);
    setPostData(data);
  };

  // Extract the properties from the first object in the array
  const columns = postData.length > 0 ? Object.keys(postData[0]) : [];

  return (
    <div className="App">
      <div className="buttons-container">
        <UsersButton onClick={handleButtonClick} />
        <PostsButton onClick={handleButtonClick} />
        <CommentsButton onClick={handleButtonClick} />
      </div>
      <div className="content">
        {postData.length > 0 && (
          // Use the DataTable component here
          <DataTable columns={columns} data={postData} />
        )}
      </div>
    </div>
  );
}

export default App;
