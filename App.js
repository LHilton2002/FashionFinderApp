import * as React from 'react'; 
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack'; 
import HomeScreen from './screens/HomeScreen'; 
import ShirtMap from './screens/ShirtMap';
import TrousersMap from './screens/TrousersMap';
import ShoesMap from './screens/ShoesMap';
import JewelleryMap from './screens/JewelleryMap';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import SocialScreen from './screens/SocialScreen';
import CameraScreen from './screens/CameraScreen';
import RegisterScreen from './screens/RegisterScreen';
import ContactScreen from './screens/ContactScreen';
import BugScreen from './screens/BugScreen';


const MainNav = createStackNavigator({ 
  Login: LoginScreen,
  Home: HomeScreen, 
  ShirtMap: ShirtMap,
  TrousersMap: TrousersMap,
  ShoesMap: ShoesMap,
  JewelleryMap: JewelleryMap,
  Settings: SettingsScreen,
  Social: SocialScreen,
  Camera: CameraScreen,
  Register: RegisterScreen,
  Contact: ContactScreen,
  Bug: BugScreen,
}, 
{ 
 headerMode: 'none' 
});



export default createAppContainer(MainNav);

