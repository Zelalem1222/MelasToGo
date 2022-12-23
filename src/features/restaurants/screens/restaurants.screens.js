import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper'
import { StyleSheet, Text, View , StatusBar , SafeAreaView, FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurants-info-card.components';
import { Spacer } from '../../../components/spacer/spacer.component';

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

      <FlatList 
       data={[{name: 1} , { name:2 } ,{name: 3} , { name:4 } , {name: 5} , { name:6 } , {name: 7} , { name:8 } , {name: 9} , { name:10 } ,{name: 11} , { name:12 } ,  ]}
       renderItem={() =>
        <>
        <Spacer position='bottom' size='large'>
       <RestaurantInfoCard />
       </Spacer>
       </> 
       }
       keyExtractor={(item ) => item.name}
       contentContainerStyle={{ padding: 16 }}
      />
        

    </SafeArea>
  )
}

