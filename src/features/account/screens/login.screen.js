import React , { useState , useContext } from "react";
import { ActivityIndicator , MD2Colors } from "react-native-paper";

import { AccountBackground , AccountCover , AccountContainer , AuthButton , AuthInput, Title, ErrorContainer  } from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";



export const LoginScreen = ({ navigation }) => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const { onLogin ,isLogin , error } = useContext(AuthenticationContext);

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
               { error && <ErrorContainer>
                <Text variant="error">{error}</Text>
                </ErrorContainer>}
                <Spacer size="large" position="top">
                    {!isLogin ? (
                        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email , password)}>
                        Login
                   </AuthButton>
                    ) : 
                    (<ActivityIndicator  animating={true} color={MD2Colors.blue300} />)
                    }
            
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