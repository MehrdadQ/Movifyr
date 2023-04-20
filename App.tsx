import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddMovie from './components/MovieList';
import NumberSelector from './components/NumberSelector';


// import { Platform } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import WebLinearGradient from 'react-native-web-linear-gradient';

import { LinearGradient } from 'expo-linear-gradient';

// const MyGradient = Platform.OS === 'web' ? WebLinearGradient : LinearGradient;

// const LinearGradientComponent = Platform.OS === 'web' ? LinearGradientWeb : LinearGradient;


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
      <LinearGradient colors={['#353535', '#222222']}>
        <Header
          leftComponent={
            <View >
              <Image
                source={require('./logo_name.png')}
                style={styles.image}
              />
            </View>
          }
          rightComponent={
            <View style={styles.questionMarkView}>
              <Icon
                name='question-circle'
                type='font-awesome'
                color='#fff'
                onPress={() => {}}
              />
            </View>
          }
          containerStyle={styles.header}
        />
      </LinearGradient>
      <View style={styles.container}>
        <StatusBar style='light' />
        <AddMovie
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },  

  questionMarkView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
  },

  image: {
    width: 130,
    height: 40,
    marginStart: 10,
  },
});