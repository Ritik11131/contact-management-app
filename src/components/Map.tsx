import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const getCountryCases = async () => {
        return await axios.get("https://disease.sh/v3/covid-19/countries")
    }
    const countryCases = useQuery({ queryKey: ['countryCases'], queryFn: getCountryCases })
    const countryCasesObj = countryCases?.data && countryCases?.data?.data

    const getMarkers = () => {
        if (!countryCasesObj) {
            return null;
        }
        return countryCasesObj?.map((country: any) => (
            <Marker key={country.country} position={[country.countryInfo?.lat, country?.countryInfo?.long]}>
                <Popup>
                    <div>
                        <h3>{country?.country}</h3>
                        <p>Total Active Cases: {country?.active}</p>
                        <p>Total Recovered Cases: {country?.recovered}</p>
                        <p>Total Deaths: {country?.deaths}</p>
                    </div>
                </Popup>
            </Marker>
        ));
    }

    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {getMarkers()}
        </MapContainer>
    );
}

export default Map;