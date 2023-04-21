import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  const [prompt, setPrompt] = useState<string>('')
  const [watchedMovies, setWatchedMovies] = useState<string[]>([])
  const [recNumber, setRecNumber] = useState<number>(1)
  const [recommendations, setRecommendations] = useState<Movie[]>([])

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
  }, [watchedMovies]);


  return (
    <SafeAreaProvider>
      <AppHeader/>
      <View style={styles.container}>
        <StatusBar style='light' />
        <MovieSelect
          movies={watchedMovies}
          setMovies={setWatchedMovies}
        />
        <NumberSelector
          recNumber={recNumber}
          setRecNumber={setRecNumber}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: Platform.OS === 'web'? 'center' : 'stretch',
  },
});