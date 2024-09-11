import React, { useState } from 'react';

const SaveComponent = () => {
  const [name, setName] = useState('');

  const handleSave = () => {
    localStorage.setItem('username', name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SaveComponent;
