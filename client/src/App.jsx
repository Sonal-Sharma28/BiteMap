import { useEffect, useState } from "react";

function App() {

  const [places, setPlaces] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  /* LOAD PLACES */

  useEffect(() => {

    fetch("http://localhost:5000/places")
      .then(res => res.json())
      .then(data => setPlaces(data));

  }, []);


  /* ADD PLACE */

  const addPlace = async () => {

    await fetch("http://localhost:5000/places", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        location: location
      })

    });

    window.location.reload();
  };


  /* SEARCH PLACES */

  const searchPlaces = () => {

    fetch(`http://localhost:5000/search?q=${search}`)
      .then(res => res.json())
      .then(data => setPlaces(data));

  };


  return (

    <div>

      <h1>ByteMap Places</h1>


      <h2>Add Place</h2>

      <input
        placeholder="Place name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={addPlace}>Add Place</button>


      <hr />


      <h2>Search Places</h2>

      <input
        placeholder="Search cafe or location"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchPlaces}>Search</button>


      <hr />


      <h2>All Places</h2>

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