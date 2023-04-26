import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import HomeScreen from './components/HomeScreen';
import MovieSelectScreen from './components/MovieSelectScreen';
import NumberSelectScreen from './components/NumberSelectScreen';
import ShowRecommendationsScreen from './components/RecommendationsScreen';
import { Platform } from 'react-native';


if (Platform.OS !== 'web') {
  require('react-native-url-polyfill/auto');
}
const Stack = createStackNavigator();

type Movie = {
  title: string;
  description: string;
  rating: number;
  year: number;
};

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, title: "Movifyr" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieSelect" component={MovieSelectScreen} />
          <Stack.Screen name="NumberSelect" component={NumberSelectScreen} />
          <Stack.Screen name="ShowRecommendations" component={ShowRecommendationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
