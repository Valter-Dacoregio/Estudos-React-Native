/**
 * @format
 */

import {AppRegistry} from 'react-native'
// import App from './App'
// import TaskList from './src/screens/TaskList'
import Navigator from './src/Navigator'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => Navigator)
