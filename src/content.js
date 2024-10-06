import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Insert the React component into the page
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// Create a root and render the App component
const root = createRoot(appContainer);
root.render(<App />);

// Initialize an empty array to store the Connect buttons
let connectButtons = [];

// Observer function to monitor changes in the DOM and capture new "Connect" buttons
const observer = new MutationObserver(() => {
    // Select all "Connect" buttons based on aria-label and data-control-name attribute
    const newConnectButtons = document.querySelectorAll('button[aria-label="Connect"][data-control-name="connect"], span.yyosflo');

    // Iterate over newConnectButtons to find buttons that haven't been stored yet and are not disabled
    newConnectButtons.forEach(button => {
        if (!connectButtons.includes(button) && button.innerText.trim() === "Connect" && !button.disabled) {
            connectButtons.push(button);
            console.log(`Found new connect button: ${button.innerText}`); // Log the found button
        }
    });
});

// Start observing the body of the page for changes to child elements and subtrees
observer.observe(document.body, { childList: true, subtree: true });

// Function to handle connecting to all profiles when the "Connect with All" button is clicked
const handleConnectAll = () => {
    if (connectButtons.length === 0) {
        alert('No connectable profiles available.');
        return;
    }

    // Iterate over the connectButtons array and click each button after a delay
    connectButtons.forEach((button, index) => {
        setTimeout(() => {
            try {
                // Ensure the button is still present in the DOM and not disabled
                if (button && !button.disabled) {
                    button.click();
                    console.log(`Clicked connect on profile ${index + 1}`);
                } else {
                    console.log(`Button ${index + 1} is not clickable or disabled.`);
                }
            } catch (error) {
                console.error(`Error clicking connect on profile ${index + 1}:`, error);
            }
        }, index * 5000); // Set a delay of 5 seconds between each click to avoid rate-limiting
    });
};

// Update the App component to include the handleConnectAll function
const AppWithConnect = () => {
    return (
        <App onConnectAll={handleConnectAll} />
    );
};

// Render the updated App component with the connection logic
root.render(<AppWithConnect />);
