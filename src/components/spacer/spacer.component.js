import React from "react";
import styled , { useTheme } from "styled-components/native";

const sizeVarients = {
    small: 1,
    large: 3,
    medium: 2
}

const positionVarient = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom'
}

const getVarient = (position , size , theme) => {
   const sizeIndex = sizeVarients[size]
   const property = positionVarient[position]
   const value = theme.space[sizeIndex] 

   return `${property} : ${value}`
}

const SpacerView = styled.View`
 ${({ varient }) => varient}
`


export const Spacer = ({ position , size , children }) => {
  const theme = useTheme()
  const varient = getVarient(position , size , theme)

  return <SpacerView varient={varient}>{children}</SpacerView>
}

Spacer.defaultPros = {
    position: 'top',
    size: 'small'
}
