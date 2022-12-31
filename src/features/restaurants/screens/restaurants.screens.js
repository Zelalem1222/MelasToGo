import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Searchbar , ActivityIndicator , MD2Colors } from 'react-native-paper'
import {  FlatList , View } from 'react-native';

import { SafeArea } from '../../../components/utility/safeArea.component';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';
import { Spacer } from '../../../components/spacer/spacer.component';

import {  RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { Search } from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
`

const LoadingContainer = styled.View`
   position: absolute
   top: 50%
   left: 50%
`

export const RestaurantsScreen = () => {
  const {restaurants , isLoading , error} = useContext(RestaurantsContext)

  return (
    
    <SafeArea>
     
     { isLoading && 
       <LoadingContainer>
      <Loading size={50} animating={true} color={MD2Colors.blue300}/>  
      </LoadingContainer>}
      <Search />
      <RestaurantList 
       data={restaurants}
       renderItem={({ item }) =>{
       return ( <>
        <Spacer position='bottom' size='large'>
       <RestaurantInfoCard restaurant={item}/>
       </Spacer>
       </> 
      )}
       }
       keyExtractor={(item ) => item.name}
      />
        

    </SafeArea>
  )
}

