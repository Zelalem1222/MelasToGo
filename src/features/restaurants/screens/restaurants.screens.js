import React, { useContext , useState } from 'react';
import styled from 'styled-components/native';
import {  ActivityIndicator , MD2Colors } from 'react-native-paper'
import { TouchableOpacity  } from 'react-native';

import { FadeInView } from '../../../components/animations/fade.animations';
import { SafeArea } from '../../../components/utility/safeArea.component';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavouriteContext } from '../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../components/favourite/favourites-bar.component';
import {  RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { RestaurantList } from '../components/restaurants-list.styles';

import { Search } from '../components/search.component';



const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
`

const LoadingContainer = styled.View`
   position: absolute
   top: 50%
   left: 50%
`

export const RestaurantsScreen = ({ navigation }) => {
  const {restaurants , isLoading , error} = useContext(RestaurantsContext)
 const [isToggled , setIsToggled] = useState(false)
 const { favourites } = useContext(FavouriteContext)
  return (
    
    <SafeArea>
     
     { isLoading && 
       <LoadingContainer>
      <Loading size={50} animating={true} color={MD2Colors.blue300}/>  
      </LoadingContainer>}
      <Search isFavouritesToggle={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
      
      <RestaurantList 
       data={restaurants}
       renderItem={({ item }) =>{
       return (
        <>
        <TouchableOpacity onPress={() => navigation.navigate('ReastaurantDetail' , { restaurant: item }) }>
        <Spacer position='bottom' size='large'>
        <FadeInView>
       <RestaurantInfoCard restaurant={item}/>
       </FadeInView>
       </Spacer>
       </TouchableOpacity> 
       </>
      )}
       }
       keyExtractor={(item ) => item.name}
      />
        
        
    </SafeArea>
  )
}

