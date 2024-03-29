import React , { useState , useContext } from "react";
import { AccountBackground , AccountCover , AccountContainer , AuthButton , AuthInput  } from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";



export const LoginScreen = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const { onLogin , error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Spacer size="large">
                <AuthInput 
                label="Email"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
                />
                </Spacer>
                <Spacer size="large" position="top">
                <AuthInput 
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                secure
                onChangeText={(p) => setPassword(p)}
                />
                </Spacer>
               { error && <Spacer size="large" position="top">
                <Text variant="error">{error}</Text>
                </Spacer>}
                <Spacer size="large" position="top">
            <AuthButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email , password)}>
             Login
        </AuthButton>
        </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}