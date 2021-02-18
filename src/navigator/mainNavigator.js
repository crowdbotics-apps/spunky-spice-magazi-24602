import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList207149Navigator from '../features/ArticleList207149/navigator';
import ArticleList207148Navigator from '../features/ArticleList207148/navigator';
import ArticleList207147Navigator from '../features/ArticleList207147/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList207149: { screen: ArticleList207149Navigator },
ArticleList207148: { screen: ArticleList207148Navigator },
ArticleList207147: { screen: ArticleList207147Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
