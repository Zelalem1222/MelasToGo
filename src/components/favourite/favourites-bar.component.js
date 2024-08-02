import React from 'react'
import styled from 'styled-components/native'
import { ScrollView , TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'
import { Spacer } from '../spacer/spacer.component'
import { Text } from '../typography/typography.component'

const FavouritesWrapper =  styled(Card)`
    padding: 10px;
    z-index: 999;
    border-radius: 15px;
    background-color : ${props => props.theme.colors.ui.quaternary}
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null
    }
    return (
        <FavouritesWrapper elevation={3}>
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