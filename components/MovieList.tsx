import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import AddedMovie from "./AddedMovie";
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
}

const MovieList: React.FC<Props> = ({ movies, setMovies }) => {
  const [movieInput, setMovieInput] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [movies]);

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
    <View style={styles.container}>
      <Text style={styles.text}>
        I want movies similar to:
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter movie name"
          value={movieInput}
          onChangeText={setMovieInput}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <Icon 
          name="plus" 
          style={styles.addButton} 
          onPress={handleAddMovie} 
          size={20}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  text: {
    color: '#f3f3f3',
    fontSize: 22,
    textAlign: 'left',
  },

  moviesContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    maxHeight: '70%'
  },

  inputContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 5,
  },

  addButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
    color: '#fff',
    borderRadius: 5,
    padding: 5,
    overflow: 'hidden',
  },
});

export default MovieList;
