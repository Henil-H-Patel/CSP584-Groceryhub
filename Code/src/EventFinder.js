import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventFinder = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchEvents = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${latitude},${longitude}&apikey=YjnDoliPxECgE2KIY96NZGEqKpKzHKeZ`
      );
      const data = await response.json();
      if (data._embedded && data._embedded.events) {
        setEvents(data._embedded.events);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error('Error fetching event data:', error);
      setError('Error fetching event data. Please try again later.');
    }
  };

  const handleSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchEvents(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
          setError('Error getting user location. Please enable location services.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    handleSearch();
  }, []); // Fetch events on component mount

  return (
    <div style={{ textAlign: 'center' }}>
      {error ? (
        <p>{error}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {events.map((event, index) => (
            index < 4 && (
              <div key={event.id} style={{ width: '30%', padding: '10px' }}>
                <Link to={event.url} target="_blank" rel="noopener noreferrer">
                  {event.name}
                  <img
                    src={event.images && event.images[0].url}
                    alt={event.name}
                    style={{ width: '100%', height: '100%', margin: '20px' }}
                  />
                </Link>
                <p>{event.description}</p>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default EventFinder;