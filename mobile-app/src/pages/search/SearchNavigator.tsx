import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedSampleComponent } from '../feed/FeedSampleComponent';

const Stack = createStackNavigator();

export const SearchNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test" component={FeedSampleComponent} />
    </Stack.Navigator>
  );
}