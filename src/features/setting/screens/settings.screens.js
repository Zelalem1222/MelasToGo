import React , {useContext} from 'react';
import styled from 'styled-components/native';

import { List , Avatar } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { SafeArea } from '../../../components/utility/safeArea.component'
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]}
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingScreen = ({navigation}) => {
    const {onLogout , user} = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
        </AvatarContainer>
        
        <List.Section>
        <SettingsItem 
             title="Favourites"
             description="View Your favourites"
             left={(props)=> <List.Icon {...props} color='black' icon="heart"/> }
             onPress={() => navigation.navigate("Favourites")}
            />
        <SettingsItem
             title="Logout"
             left={(props)=> <List.Icon {...props} color='black' icon="door"/> }
             onPress={onLogout}
            />
             
            
        </List.Section>
      </SafeArea>
    )
  }