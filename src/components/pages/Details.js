import {  useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
const Details = () => {
  const {eventId}=useParams()
  const [location, SetLocation ]=useState([]);
  useEffect( async () => {
    const respond = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`);
    const data = await respond.json();
    SetLocation(data);}, [eventId]);
  return (
          
          
    <div>
    <h6>Place: {location?.properties?.place}</h6>
                <h6>Time: {location?.properties?.time}</h6>
                <h6>Longitude: {location?.properties?.products?.origin[0]?.properties?.longitude}</h6>
                <h6>Magnitude: {location?.properties?.mag}</h6>
                <h6>Latitude: {location?.properties?.products?.origin[0]?.properties?.latitude}</h6>
               
     </div>
  );
};
export default Details;
