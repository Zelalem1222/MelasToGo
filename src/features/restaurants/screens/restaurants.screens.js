import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper'
import { StyleSheet, Text, View , StatusBar , SafeAreaView } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';

const RestaurantListContainer = styled.View`
     flex : 1
     padding : ${props => props.theme.space[3]}
`
const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]}
`

const SafeArea = styled.SafeAreaView`
      flex: 1
      margin-top: ${StatusBar.currentHeight}px
`

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer >
      <Searchbar placeholder='Search' />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  )
}

