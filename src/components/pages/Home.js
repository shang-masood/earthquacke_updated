import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [location, SetLocation] = useState([]);
  const update = () => {
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetLocation(data.features);
      });
  };
  useEffect(update, []);
  return (
    <>
      <h1>welcome to earthquach by shang</h1>
      <div className="home-design">
        <table>
          <thead>
          <tr>
            <td>place</td>
            <td>time</td>
            <td> </td>
          </tr>
          </thead>
          <tbody>
          {location.map((location) => {
            return (
              <tr>
                <td>{location.properties.place} </td>
                <td>{location.properties.time} </td>
                <td>
                  <button>
                    <Link to={`/details/${location.id}`}>show</Link>
                  </button>
                </td>
              </tr>
            );
          })}
          </tbody>
          <tfoot>
            </tfoot>
        </table>
      </div>
    </>
  );
};
export default Home;
