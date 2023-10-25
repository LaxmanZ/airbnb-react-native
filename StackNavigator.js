import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ReserveScreen from './screens/ReserveScreen';
import ConfirmScreen from './screens/ConfirmScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Reserve"
          component={ReserveScreen}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
