import React from "react";
import { SvgXml } from "react-native-svg";

import { Image } from "react-native";
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component'

import star from '../../../../assets/star'
import open from '../../../../assets/open'

import { Icon , SectionEnd, Section , Rating , Info , RestaurantCard , RestaurantCardCover , Address } from "./restaurants-info-card.styles";




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
         <Text variant='label'>{name}</Text>
         <Section>
         <Rating>
         { ratingArray.map((index) => <SvgXml key={index} xml={star} height={20} width={20}/> ) }
         </Rating>
         <SectionEnd>
            { isClosedTemporarily && <Text variant='error'>Closed Temporarily</Text> }
         <Spacer size='large' position='left' >
         { isOpened && <SvgXml xml={open} height={30} width={25}/> }
         </Spacer>
         <Spacer size='large' position='left'>
         <Icon  style={{ height:15 , width: 15 }} source={{ uri: icon }} />
         </Spacer>
         </SectionEnd>
         </Section>
         <Address >{address}</Address>
         </Info>
      </RestaurantCard>
        
    )
}


