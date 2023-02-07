import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Modal, Button } from 'react-bootstrap';

const MapsApi = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 8.54904,
    lng: 76.92725,
  };

  const locations = [
    {
      name: 'Tecknopark kazhakuttam',
      location: {
        lat: 8.5555187,
        lng: 76.8836149,
      },
    },
  ];

  const [location, setLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      ​
      <LoadScript googleMapsApiKey="AIzaSyAWcnqzFAUYGWfGyml9bOseG8Yxv1xMbGA">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                onClick={handleShow}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
      <button onClick={getLocation}>Get Location</button>
      {location.lat && (
        <p>
          Latitude: {location.lat} Longitude: {location.long}
        </p>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          {locations.map((home) => (
            <div key={home}>
              <div>{home.name}</div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ​
    </div>
  );
};

export default MapsApi;
