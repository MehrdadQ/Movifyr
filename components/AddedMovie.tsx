import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MovieProps {
  title: string;
  onRemove: () => void;
}

const AddedMovie: React.FC<MovieProps> = ({ title, onRemove }) => {
  return (
    <TouchableOpacity onPress={onRemove} style={styles.container}>
        <Text style={styles.text}>
          {title}
        </Text>
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

