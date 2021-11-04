import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" compnent ={TabNavigator}/>
            <Drawer.Screen name="Profile" compnent ={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;
