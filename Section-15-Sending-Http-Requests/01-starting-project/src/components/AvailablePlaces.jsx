import Places from './Places.jsx';
import {useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  fetch('http://localhost:3000/places').then((response) => {
    return response.json();
  }).then((respData) => {
    setAvailablePlaces(respData.places);
  })

  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
