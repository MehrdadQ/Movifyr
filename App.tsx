import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import AppHeader from './components/AppHeader';
import MovieSelect from './components/MovieSelect';
import NumberSelector from './components/NumberSelector';


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


  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <AppHeader/>
        <View style={styles.container}>
          <StatusBar style='light' />
          <MovieSelect/>
          <NumberSelector/>
        </View>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: Platform.OS === 'web'? 'center' : 'stretch',
  },
});