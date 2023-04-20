import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface MovieProps {
  title: string;
  onRemove: () => void;
}

const AddedMovie: React.FC<MovieProps> = ({ title, onRemove }) => {
  return (
    <TouchableOpacity onPress={onRemove} style={styles.container}>
      {/* <View > */}
        <Text style={styles.text}>
          {title}
        </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // height: '100%',
  },

  text: {
    color: '#f3f3f3',
    fontSize: 20,
    flex: 1,
  },

  removeButton: {
    color: '#f3f3f3',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default AddedMovie;

