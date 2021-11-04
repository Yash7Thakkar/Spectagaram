import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./Navigation/TabNavigator";
import DrawerNavigator from "./Navigation/Drawernavigator";
import CreatePost from "./Screens/CreatePost";
import Feed from "./Screens/Feed";
import Profile from "./Screens/Profile";

const AppSwitchNavigator = createSwitchNavigator({
  CreatePost: CreatePost,
  Feed:Feed,
  Profile:Profile
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App(){
  return(
    <AppNavigator/>
  )
}