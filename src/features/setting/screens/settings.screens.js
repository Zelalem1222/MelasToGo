import React , {useContext} from 'react';
import styled from 'styled-components/native';

import { List } from 'react-native-paper';


import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SafeArea } from '../../../components/utility/safeArea.component'

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]}
`;

export const SettingScreen = ({navigation}) => {
    const {onLogout} = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <List.Section>
        <SettingsItem 
             title="Favourites"
             description="View Your favourites"
             left={(props)=> <List.Icon {...props} color='black' icon="heart"/> }
             onPress={() => navigation.navigate("favourites")}
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