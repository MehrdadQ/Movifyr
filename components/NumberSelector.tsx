import Slider from '@react-native-community/slider';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface SliderProps {
  recNumber: number;
  setRecNumber: (value: number) => void;
}

const NumberSelector: React.FC<SliderProps> = ({ recNumber, setRecNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How many recommendations do you want?</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={recNumber}
        onValueChange={setRecNumber}
        minimumTrackTintColor="#dddddd"
        maximumTrackTintColor="#777777"
        thumbTintColor="#7893CD"
      />
      <Text style={styles.thumbText}>{recNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#f3f3f3',
    fontSize: 20,
  }, 
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
    width: Platform.OS === "web" ? '70%' : '100%',
    height: Platform.OS === "web" ? '50%' : '100%',
    overflow: 'hidden',
  },
  slider: {
    // width: '100%',
    maxHeight: 50,
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
});



export default NumberSelector;
