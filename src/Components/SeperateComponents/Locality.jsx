import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";

const Locality = () => {
  const customIcon = new Icon({
    iconUrl:
      "https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif",
    iconSize: [39, 39],
  });

  return (
    <>
      <MapContainer center={[51.5074, -0.1278]} zoom={5}>
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        
          <Marker
           
            position={[51.5074, -0.1278]}
            icon={customIcon}
            className="border"
          >
            <Tooltip>
            
              <Popup className="font-mooli">
                <img src= "https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif" alt="" className=" h-28    " />
                <h3 className="font-semibold  ">Test name </h3>

                <button className="bg-black rounded-md  text-white px-3 py-1 font-mooli  ">
                  {" "}
                  <Link to={`/detail`}> Learn More</Link>
                </button>
              </Popup>
            </Tooltip>
          </Marker>
      
      </MapContainer>
     
    </>
  );
};

export default Locality;
