import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image } from "react-native";

export const Address = styled.Text`
font-family: ${props => props.theme.fonts.body}
font-size: ${props => props.theme.fontSizes.caption}
`

export const RestaurantCard = styled(Card)`
  background-color : ${props => props.theme.colors.ui.quaternary}
`

export const RestaurantCardCover = styled(Card.Cover)`
   background-color : ${props => props.theme.colors.ui.quaternary}
   padding : ${ props => props.theme.space[3] }
`

export const Info = styled.View`
padding: ${ props => props.theme.space[3] }
`
export const Rating = styled.View`
flex-direction: row
`

export const Section = styled.View`
padding-vertical: ${ props => props.theme.space[1] }
flex-direction: row
justify-content: space-between
align-items: center
`

export const SectionEnd = styled.View`
 flex-direction: row
 align-items: center
`

export const Icon = styled(Image)`
 width: 15px
 heigth: 15px
`
