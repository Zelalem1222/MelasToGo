import React , { useState , useContext } from "react";
import { AccountBackground , AccountCover , AccountContainer , AuthButton , AuthInput, Title, ErrorContainer  } from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";



export const RegisterScreen = ({ navigation }) => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [repeatedPassword , setRepeatedPassword] = useState("");
    const { onRegister , error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
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
                onChangeText={(p) => setPassword(p)}
                />
                </Spacer>
                <Spacer size="large" position="top">
                <AuthInput 
                label="Repeat Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setRepeatedPassword(p)}
                />
                </Spacer>
               { error && <ErrorContainer>
                <Text variant="error">{error}</Text>
                </ErrorContainer>}
                <Spacer size="large" position="top">
            <AuthButton icon="email" mode="contained" onPress={() => onRegister(email , password)}>
             Register
        </AuthButton>
        </Spacer>
            </AccountContainer>
            <Spacer size="large" position="top">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    )
}