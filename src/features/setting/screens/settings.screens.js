import React , {useContext , useState , useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { List , Avatar } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { colors } from '../../../infrastructure/theme/colors';
import { SafeArea } from '../../../components/utility/safeArea.component'
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';

const TransparentSafeArea = styled(SafeArea)`
   background-color: transparent;
`

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]}
  background-color: rgba(255,255,255, 0.4)
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home-bg.jpg')
})`
  position: absolute;
  height: 100%;
  width: 100%;
` 


export const SettingScreen = ({navigation}) => {
    const {onLogout , user} = useContext(AuthenticationContext);
    const [photo , setPhoto] = useState(null)

    const getProfilePhoto = async (currentUser) => {
       const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
       setPhoto(photoUri)
    };

    useFocusEffect(
      useCallback(() => {
          getProfilePhoto(user);
      }, [user])
    )


    return (
      <SettingsBackground>
      <TransparentSafeArea>
        
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && <Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.primary} />}
            {photo && <Avatar.Image size={180} source={{uri: photo}} backgroundColor="#2182BD" /> }
        
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
        </AvatarContainer>
        
        <List.Section>
        <SettingsItem 
             title="Favourites"
             description="View Your favourites"
             left={(props)=> <List.Icon {...props} color={colors.ui.error} icon="heart"/> }
             onPress={() => navigation.navigate("Favourites")}
            />
            <Spacer position='top' size="small"/>
            
        <SettingsItem
             title="Payment"
             left={(props)=> <List.Icon {...props} color={colors.ui.secondary} icon="cart"/> }
             onPress={() => null}
            />
             <Spacer position='top' size="small"/>
        <SettingsItem
             title="Past Orders"
             left={(props)=> <List.Icon {...props} color={colors.ui.secondary} icon="history"/> }
             onPress={() => null}
            />
            <Spacer position='top' size="small"/>
        <SettingsItem
             title="Logout"
             left={(props)=> <List.Icon {...props} color={colors.ui.secondary} icon="door"/> }
             onPress={onLogout}
            />
             
            
        </List.Section>
      </TransparentSafeArea>
      </SettingsBackground>
    )
  }