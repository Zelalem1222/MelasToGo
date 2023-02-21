import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../typography/typography.component";


const CompactImage = styled(Card.Cover)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === "android"

export const CompactRestaurantInfo = ({ restaurant }) => {
    const Imagge = isAndroid ? CompactWebview : CompactImage
    return (
        <Item>
            <Imagge source={{ uri: restaurant.photos[0] }} />
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}