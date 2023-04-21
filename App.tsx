import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import AppHeader from './components/AppHeader';
import MovieSelectScreen from './components/MovieSelectScreen';
import NumberSelectScreen from './components/NumberSelectScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

type Movie = {
  title: string;
  description: string;
  rating: number;
  year: number;
};

export default function App() {
  const fetchRecommendations = async (movies: String[]): Promise<Movie[]> => {
    // Call api using prompt and populate recommendations accordingly
    // Will have to extract json from response
    return [];
  }

  const generatePrompt = () => {
    // Generate prompt based on watched movies
    return '';
  }

  useEffect(() => {
    generatePrompt();
  // }, [watchedMovies]);
  }, []);


  // return (
  //   <RecoilRoot>
  //     <SafeAreaProvider>
  //       <AppHeader/>
  //       <View style={styles.container}>
  //         <StatusBar style='light' />
  //         <MovieSelectScreen/>
  //         <NumberSelectScreen/>
  //       </View>
  //     </SafeAreaProvider>
  //   </RecoilRoot>
  // );
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieSelect" component={MovieSelectScreen} />
          <Stack.Screen name="NumberSelect" component={NumberSelectScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
