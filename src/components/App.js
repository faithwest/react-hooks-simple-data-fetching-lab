// Step 1: Create the App Component
import React, { useState, useEffect } from "react";

function App() {
  // Create state variables to hold the dog image and loading status
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Step 2: Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image and mark loading as false
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image: " + error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs once

  return (
    <div>
      {loading ? (
        // Show a loading message while fetching
        <p>Loading...</p>
      ) : (
        // Display the dog image once fetched
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;


// create your App component here
