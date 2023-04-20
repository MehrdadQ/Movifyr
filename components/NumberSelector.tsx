import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface SliderProps {
  recNumber: number;
  setRecNumber: (value: number) => void;
}



const NumberSelector: React.FC<SliderProps> = ({ recNumber, setRecNumber }) => {

  const onValueChange = (value: number) => {
    setRecNumber(value);
  };

  
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
    overflow: 'hidden',
    padding: 20,
  },
  slider: {
    width: '100%',
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
