import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppHeader from './AppHeader';

interface Props {
  navigation: StackNavigationProp<any>;
}

const HomeScreen = ({ navigation }: Props) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    Animated.sequence([
      Animated.delay(1),
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2),
      Animated.timing(animation, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2),
      Animated.timing(animation, {
        toValue: 3,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2),
      Animated.timing(animation, {
        toValue: 4,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const text1Opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const text2Opacity = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, 1],
  });

  const text3Opacity = animation.interpolate({
    inputRange: [2, 3],
    outputRange: [0, 1],
  });
  
  const buttonOpacity = animation.interpolate({
    inputRange: [3, 4],
    outputRange: [0, 1],
  });

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { opacity: text1Opacity }]}>
          Ready for your next movie night? 🎬
        </Animated.Text>
        <Animated.Text style={[styles.text, { opacity: text2Opacity }]}>
          Let our AI-powered movie expert suggest personalized movie picks based on your past
          favorites.
        </Animated.Text>
        <Animated.Text style={[styles.text, { opacity: text3Opacity }]}>
          Sit back, relax, and discover new movies you'll love! 🍿
        </Animated.Text>
        <Animated.View style={{ opacity: buttonOpacity }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MovieSelect')}
          >
            <Animated.Text style={styles.buttonText}>
              Get started
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#222222',
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
  },
  text: {
    padding: 15,
    color: '#e2e2e2',
    fontSize: 26,
    width: Platform.OS === 'web' ? '70%' : '100%',
    marginBottom: 20,
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

export default HomeScreen;
