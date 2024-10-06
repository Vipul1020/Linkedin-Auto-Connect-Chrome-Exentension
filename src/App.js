import React from 'react';

const App = ({ onConnectAll }) => { // Accepting onConnectAll as a prop
  const handleConnectAll = (event) => {
    event.preventDefault(); // Prevent default button click behavior
    onConnectAll(); // Call the passed function to handle connecting
  };

  return (
    <button style={styles.button} onClick={handleConnectAll}>
      Connect with All
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#0073b1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
  },
};

export default App;
