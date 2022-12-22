import React from "react";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { Text , StyleSheet, View , Image } from "react-native";
import { Card, Paragraph } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';

import star from '../../../../assets/star'
import open from '../../../../assets/open'


const Title = styled.Text`
font-family: ${props => props.theme.fonts.heading}
font-size: ${props => props.theme.fontSizes.body}
color: ${ props => props.theme.colors.ui.primary }
`

const Address = styled.Text`
font-family: ${props => props.theme.fonts.body}
font-size: ${props => props.theme.fontSizes.caption}
`

const RestaurantCard = styled(Card)`
  background-color : ${props => props.theme.colors.ui.quaternary}
`

const RestaurantCardCover = styled(Card.Cover)`
   background-color : ${props => props.theme.colors.ui.quaternary}
   padding : ${ props => props.theme.space[3] }
`

const Info = styled.View`
padding: ${ props => props.theme.space[3] }
`
const Rating = styled.View`
flex-direction: row
`

const Section = styled.View`
padding-vertical: ${ props => props.theme.space[1] }
flex-direction: row
justify-content: space-between
align-items: center
`

const SectionEnd = styled.View`
 flex-direction: row
 align-items: center
`


export const RestaurantInfoCard = ({ restaurant = {} }) => {
  
    const { 
        name ='Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        address= '100 some street',
        rating = 4,
        isOpened = true,
        isClosedTemporarily = true
   } = restaurant;
     
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
         <Title >{name}</Title>
         <Section>
         <Rating>
         { ratingArray.map((index) => <SvgXml key={index} xml={star} height={20} width={20}/> ) }
         </Rating>
         <SectionEnd>
            { isClosedTemporarily && <Text varient='label' style={{ color: 'red' }}>Closed Temporarily</Text> }
         <Spacer size='large' position='left' >
         { isOpened && <SvgXml xml={open} height={30} width={25}/> }
         </Spacer>
         <Spacer size='large' position='left'>
         <Image style={{ width: 15 , height: 15 }} source={{ uri: icon }} />
         </Spacer>
         </SectionEnd>
         </Section>
         <Address >{address}</Address>
         </Info>
      </RestaurantCard>
        
    )
}


