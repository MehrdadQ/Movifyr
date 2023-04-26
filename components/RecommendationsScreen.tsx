import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, View, Text, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import { useRecoilState } from "recoil";
import { errorState, loadingState, recNumberState, recommendationsState, watchedMoviesState } from "../atoms";

interface Props {
  navigation: StackNavigationProp<any>;
}

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const movieWidth = width - 20;

const RecommendationsScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useRecoilState(watchedMoviesState);
  const [recommendations, setRecommendations] = useRecoilState(recommendationsState);
  const [recNumber, setRecNumber] = useRecoilState(recNumberState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [errors, setErrors] = useRecoilState(errorState);



  // const [movies, setMovies] = useRecoilState(watchedMoviesState);
  // const [recommendations, setRecommendations] = useRecoilState(recommendationsState);
  // const [recNumber, setRecNumber] = useRecoilState(recNumberState);
  // const [isLoading, setIsLoading] = useRecoilState(loadingState);
  // const [errors, setErrors] = useRecoilState(errorState);

  // useEffect(() => {
  //   setRecommendations(
      
  //   )
  // ), []};

  return (
    <>
      <AppHeader />
      <ScrollView
        horizontal
        snapToInterval={movieWidth + 20} // 16 is the margin on both sides of each movie
        decelerationRate="fast" // to make the scroll snap quickly
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.container}>
        {errors.length > 0 ? errors.map((error, index) => (
          <Text key={index}>{error}</Text>
        ))
        :
          isLoading ? (
            <Text style={styles.loadingText}>Loading...</Text>
          ) :
            recommendations.map((movie, index) => (
              <View key={index} style={styles.movieContainer}>
                <Text style={styles.title}>{movie.title} ({movie.year})</Text>
                <Text style={styles.description}>{movie.description}</Text>
                <View style={styles.yearRatingContainer}>
                  {/* <Text style={styles.year}>{movie.year}</Text> */}
                  <Text style={styles.rating}>IMDB rating: {movie.rating}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ddd',
    marginTop: 20,
  },
  movieContainer: {
    marginHorizontal: 10,
    width: width - 20,
    padding: 26,
    height: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#223355",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },  
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ddd',
    marginBottom: 10,
  },
  description: {
    fontSize: 26,
    color: '#ddd',
    marginBottom: 10,
    lineHeight: 24,
  },
  yearRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginLeft: 'auto',
  },
  rating: {
    color: '#ddd',
    fontSize: 16,
  },
  scrollContentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecommendationsScreen;