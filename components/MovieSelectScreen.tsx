import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRecoilState } from 'recoil';
import { watchedMoviesState } from '../atoms';
import AddedMovie from "./AddedMovie";
import AppHeader from './AppHeader';

interface Props {
  navigation: StackNavigationProp<any>;
}

const MovieSelectScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useRecoilState(watchedMoviesState);

  const [movieInput, setMovieInput] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleAddMovie = () => {
    if (movieInput.trim() === '') return;
    setMovies([...movies, movieInput.trim()]);
    setMovieInput('');
    inputRef.current?.focus();
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleAddMovie();
    }
  };

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Text style={styles.text}>
          I want movies similar to:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{...styles.input, backgroundColor: movies.length < 5 ? "#f3f3f3" : "#aaaaaa" }}
            placeholder={movies.length < 5 ? "Enter movie name" : "max number of movies reached"}
            value={movieInput}
            onChangeText={setMovieInput}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            editable={movies.length < 5}
          />
          {movies.length < 5 && <Icon 
            name="plus" 
            style={styles.addButton} 
            onPress={handleAddMovie} 
            size={30}
          />}
        </View>
        <ScrollView style={styles.moviesContainer}>
          {movies.map((movie, index) => (
            <AddedMovie
              key={index}
              title={movie}
              onRemove={() => {
                const updatedMovies = [...movies];
                updatedMovies.splice(index, 1);
                setMovies(updatedMovies);
              }}
            />
          ))}
        </ScrollView>
        {movies.length > 0 && <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NumberSelect')}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 50,
    flex: 1,
    padding: 15,
    backgroundColor: '#222222',
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
  },

  text: {
    color: '#f3f3f3',
    fontSize: 26,
    textAlign: 'left',
  },
  
  moviesContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    maxHeight: '30%',
    width: Platform.OS === "web" ? '60%' : '100%',
  },

  inputContainer: {
    paddingTop: 10,
    width: Platform.OS === "web" ? '60%' : '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    borderRadius: 5,
    padding: 5,
    flex: 1,
    fontSize: 25
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
    color: '#fff',
    borderRadius: 5,
    padding: 7,
    overflow: 'hidden',
    marginLeft: 7,
  },

  button: {
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignSelf: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
});

export default MovieSelectScreen;
