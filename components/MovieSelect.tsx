import React, { useRef, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddedMovie from "./AddedMovie";


interface Props {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
}

const MovieSelect: React.FC<Props> = ({ movies, setMovies }) => {
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
    <View style={styles.container}>
      <Text style={styles.text}>
        I want movies similar to:
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{...styles.input, backgroundColor: movies.length < 5 ? "#f3f3f3" : "#aaaaaa" }}
          placeholder={movies.length < 5 ? "Enter movie name" : "maximum number of movies reached"}
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
          size={20}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
    width: Platform.OS === "web" ? '70%' : '100%',
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

export default MovieSelect;
