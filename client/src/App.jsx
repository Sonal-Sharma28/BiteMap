import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  return (
    <div>
      <h1>BiteMap Places</h1>

      {places.map((place, index) => (
        <div key={index}>
          <h3>{place.name}</h3>
          <p>{place.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;