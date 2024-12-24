import React, { useContext } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)
    // console.warn(Object.keys(ctx.state))

    keyExtractor = (item, index) => index.toString()

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    iconProps={{name: "edit", size: 25, color: "orange"}}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    iconProps={{name: "delete", size: 25, color: "red"}}
                />                
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                // keyExtractor={user => user.id.toString()}
                keyExtractor={keyExtractor}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}