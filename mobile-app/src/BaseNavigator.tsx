import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedNavigator } from './pages/feed/FeedNavigator';
import { SearchNavigator } from './pages/search/SearchNavigator';


const Tabs = createBottomTabNavigator();

export const BaseNavigator: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feed" component={FeedNavigator} />
      <Tabs.Screen name="Search" component={SearchNavigator} />

    </Tabs.Navigator>
  );
}