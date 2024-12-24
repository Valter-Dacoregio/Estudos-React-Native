import {AppRegistry} from 'react-native'
// import App from './App'
import Feed from './src/screens/Feed'
import AddPhoto from './src/screens/AddPhoto'
// import Navigator from './src/Navigator'
import {name as appName} from './app.json'

// AppRegistry.registerComponent(appName, () => Feed)
AppRegistry.registerComponent(appName, () => AddPhoto)
// AppRegistry.registerComponent(appName, () => Navigator)
