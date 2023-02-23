import React , {useContext , useEffect, useState} from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
    padding-horizontal: ${props => props.theme.space[3]}
    margin-top: ${props => props.theme.space[3]}
`

export const Search = ({ isFavouritesToggle , onFavouritesToggle }) => {
    const { keyword , search } = useContext(LocationContext)
    const [searchKeyword , setSearchKeyword] = useState(keyword)
    useEffect(() => {
     setSearchKeyword(keyword)
    } , [keyword])
    return (
        <SearchContainer >
        <Searchbar 
        icon={isFavouritesToggle ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder='Search for a location' 
        value={searchKeyword}
        onSubmitEditing={() => {
            search(searchKeyword)
        }}
        onChangeText={(text) => {
            setSearchKeyword(text)
        }}
        />
         </SearchContainer>
    )
}