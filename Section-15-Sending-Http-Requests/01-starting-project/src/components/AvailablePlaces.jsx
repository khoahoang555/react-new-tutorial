import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/placesssss');
        const respData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        setAvailablePlaces(respData.places);
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch places, please try again later.'
        });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
