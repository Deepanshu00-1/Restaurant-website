import React, { useState, useEffect } from 'react';

const DisplayComponent = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default DisplayComponent;
