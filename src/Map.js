import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: 37.7749, // Replace with your desired latitude
        lng: -122.4194, // Replace with your desired longitude
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY', // Replace with your API key
})(MapContainer);
