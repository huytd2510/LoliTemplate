import { HomeStack } from "../home-stack";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabBar } from "./my-bottom-tab";

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={HomeStack} />
    </Tab.Navigator>
  )
}
