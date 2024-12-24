import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// BIBLIOTECA DE ÍCONES IMPORTADA
// import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 30 }
    }} initialRouteName="TelaB"
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'TelaA':
                iconName = focused
                    // ? 'ios-information-circle'
                    // : 'ios-information-circle-outline'
                    // ? 'information-circle'
                    // : 'information-circle-outline'       
                    ? 'add-alert'
                    : 'add-alert'                                          
                break;
            case 'TelaB':
                iconName = focused
                    // ? 'information-circle'
                    // : 'information-circle-outline'
                    ? 'add'
                    : 'add'                      
                break;
            case 'TelaC':
                // iconName = focused ? 'list-box' : 'list'
                iconName = focused ? 'add-comment' : 'add-comment'
                break;
          }

        //   return <Ionicons name={iconName} size={size} color={color} />
        return <Icon name={iconName} size={size} color={color} />
        // return <Icon name="add" size={20} color="#000" />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: true,
      }}>
        <Tab.Screen name="TelaA" component={TelaA}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="TelaB" component={TelaB}
            options={{ title: 'Meio' }} />
        <Tab.Screen name="TelaC" component={TelaC}
            options={{ title: 'Final' }} />
    </Tab.Navigator>
)