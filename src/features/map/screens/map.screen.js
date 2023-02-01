import React, {useContext, useEffect , useState} from "react";
import MapView from "react-native-maps";
import { Marker , Callout } from "react-native-maps";
import styled from "styled-components/native";


import { LocationContext } from "../../../services/locations/location.context";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

import { MapCallout } from '../components/map-callout'

import { Search } from "../components/search.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

const someText = styled.Text``

export const MapScreen = ({ navigation }) => {
    const [latDelta , setLatDelta] = useState(0);
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const { lat, lng , viewport } = location;
    console.log(restaurants)

    useEffect(() => {
       const northeastLat = viewport.northeast.lat;
       const southwestLat = viewport.southwest.lat;
            setLatDelta(northeastLat - southwestLat);
    } , [location , viewport])
    return (
    <>
    <Search />
    <Map
     region={{ 
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.03
    }}
    >
        {restaurants.map((restaurant) => {
            return <Marker  
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng
            }}
            >
                <Callout onPress={() => navigation.navigate('ReastaurantDetail' , { restaurant }) }>
                    <MapCallout restaurant={restaurant} />
                </Callout>
            </Marker>
        })}
    </Map>
    </>
    )
}
