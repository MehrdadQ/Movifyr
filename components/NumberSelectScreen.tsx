import Slider from '@react-native-community/slider';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { recNumberState } from '../atoms';
import AppHeader from './AppHeader';
interface Props {
  navigation: StackNavigationProp<any>;
}

const NumberSelectScreen = ({ navigation }: Props) => {
  const [recNumber, setRecNumber] = useRecoilState(recNumberState);

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Text style={styles.text}>How many recommendations do you want?</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={recNumber}
          onValueChange={setRecNumber}
          minimumTrackTintColor="#dddddd"
          maximumTrackTintColor="#777777"
          thumbTintColor="#7893CD"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NumberSelect')}
        >
          <Text style={styles.buttonText}>
            Give me {recNumber} recommendation{recNumber > 1 && 's'}!
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#f3f3f3',
    fontSize: 20,
  },
  container: {
    justifyContent: 'flex-start',
    paddingTop: 50,
    flex: 1,
    padding: 15,
    backgroundColor: '#222222',
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
    overflow: 'hidden',
  },

  slider: {
    maxHeight: 50,
    width: Platform.OS === "web" ? '60%' : '100%',
  },

  thumb: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#87ceeb',
  },

  track: {
    height: 4,
    backgroundColor: '#bdc3c7',
  },

  thumbText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#f3f3f3',
  },

  button: {
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    marginTop: 50,
    alignSelf: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
});

export default NumberSelectScreen;
