
import styled from "styled-components/native"

import { Image, Text} from 'react-native'

const MyText = styled.Text``

export const MapCallout = ({ restaurant }) => {
    return (
        <>
        <Image source={{ uri: restaurant.photos[0] }} />
        <MyText>{restaurant.name}</MyText>
        </>
    )
}