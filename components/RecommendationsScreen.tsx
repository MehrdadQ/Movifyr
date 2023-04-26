import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from "recoil";
import { errorState, loadingState, recNumberState, recommendationsState, watchedMoviesState } from "../atoms";
import AppHeader from './AppHeader';

interface Props {
  navigation: StackNavigationProp<any>;
}

import { Dimensions } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay/lib';

const { width } = Dimensions.get("window");

const movieWidth = width - 20;

const RecommendationsScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useRecoilState(watchedMoviesState);
  const [recommendations, setRecommendations] = useRecoilState(recommendationsState);
  const [recNumber, setRecNumber] = useRecoilState(recNumberState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [errors, setErrors] = useRecoilState(errorState);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (loadingMessage) {
        case 'Loading...':
          setLoadingMessage('Almost there...');
          break;
        case 'Almost there...':
          setLoadingMessage('Hang on...');
          break;
        case 'Hang on...':
          setLoadingMessage('Just a moment...');
          break;
        default:
          setLoadingMessage('Loading...');
          break;
      }
    }, 4000);
  
    return () => clearInterval(intervalId);
  }, [loadingMessage]);

  return (
    <>
      <AppHeader />
      {errors.length > 0 ? errors.map((error, index) => (
          <Text key={index}>{error}</Text>
        ))
        :
          isLoading ? (
            <View style={styles.loadingContainer}>
              <Spinner visible={true} />
              <Text style={styles.loadingText}>{loadingMessage}</Text>
            </View>
          ) : 
          <ScrollView
            horizontal
            snapToInterval={movieWidth + 20} // 16 is the margin on both sides of each movie
            decelerationRate="fast" // to make the scroll snap quickly
            contentContainerStyle={styles.scrollContentContainer}
          >
            <View style={styles.container}>
              {recommendations.map((movie, index) => (
                <View key={index} style={styles.movieContainer}>
                  <Text style={styles.title}>{movie.title} ({movie.year})</Text>
                  <Text style={styles.description}>{movie.description}</Text>
                  <View style={styles.yearRatingContainer}>
                    {/* <Text style={styles.year}>{movie.year}</Text> */}
                    <Text style={styles.rating}>IMDB rating: {movie.rating}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
      }
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
    marginTop: '20%',
    textAlign: 'center',
  },
  movieContainer: {
    marginHorizontal: 10,
    width: width - 20,
    padding: 26,
    height: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#334499",
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
  loadingContainer: {
    backgroundColor: '#222222',
    height: "100%",
    width: "100%",
    padding: 20,
  }
});

export default RecommendationsScreen;