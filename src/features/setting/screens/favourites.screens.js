import React , {useContext} from 'react';
import styled from 'styled-components/native';
import {  TouchableOpacity } from 'react-native';

import { FavouriteContext } from '../../../services/favourites/favourites.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurants-info-card.components';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safeArea.component';
import { Text } from '../../../components/typography/typography.component';
import { RestaurantList } from '../../restaurants/components/restaurants-list.styles';


const NoFavouritesArea = styled(SafeArea)`
     align-items: center,
     justify-content: center
`



export const FavouritesScreen = ({navigation})=> {
     const { favourites } = useContext(FavouriteContext);

     return favourites.length ? (
          <SafeArea>
         <RestaurantList 
          data={favourites}
          renderItem={({ item }) =>{
          return (
           <>
           <TouchableOpacity onPress={() => navigation.navigate('ReastaurantDetail' , { restaurant: item }) }>
           <Spacer position='bottom' size='large'>
          <RestaurantInfoCard restaurant={item}/>
          </Spacer>
          </TouchableOpacity> 
          </>
         )}
          }
          keyExtractor={(item ) => item.name}
         />
         </SafeArea>) : (
          <NoFavouritesArea>
             <Text variant="label">No Favourites Yet!</Text>
          </NoFavouritesArea>
         )
    
} 