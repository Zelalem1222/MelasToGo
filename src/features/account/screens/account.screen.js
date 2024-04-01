import React from "react";
import { Spacer } from '../../../components/spacer/spacer.component'


import { AccountBackground , AccountCover , AccountContainer , AuthButton , Title } from "../components/account.styles";

export const AccountScreen = ({navigation}) => {
    return <AccountBackground>
          <AccountCover />
          <AccountContainer>
          <Title>Meals To Go</Title>
          <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
             Login
        </AuthButton>
       <Spacer size="large" position="top">
        <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
             Register
        </AuthButton>
        </Spacer>
          </AccountContainer>
    </AccountBackground>
}