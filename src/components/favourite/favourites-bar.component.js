import React from 'react'
import styled from 'styled-components/native'
import { ScrollView , TouchableOpacity } from 'react-native'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'
import { Spacer } from '../spacer/spacer.component'
import { Text } from '../typography/typography.component'

const FavouritesWrapper = styled.View`
    padding: 10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer position='left' size='large'>
                <Text variant='caption'>Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {favourites.map((restaurant) => {
                     return (
                          <Spacer key={restaurant.name} position='left' size='medium'>
                            <TouchableOpacity onPress={() => 
                                onNavigate('ReastaurantDetail' , { restaurant})
                            }>
                                 <CompactRestaurantInfo restaurant={restaurant}/>
                            </TouchableOpacity>
                          </Spacer>
                     )
               } 
                )}
               </ScrollView>
            </FavouritesWrapper>
    )
}