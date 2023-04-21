import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';


const AppHeader = () => {
  return (
    <LinearGradient colors={['#353535', '#222222']}>
      <Header
      leftComponent={
        <View >
        <Image
            source={require('../logo_name.png')}
            style={styles.image}
        />
        </View>
      }
      rightComponent={
        <View style={styles.questionMarkView}>
        <Icon
            name='question-circle'
            type='font-awesome'
            color='#fff'
            onPress={() => {}}
        />
        </View>
      }
      containerStyle={styles.header}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },  

  questionMarkView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
  },

  image: {
    width: 130,
    height: 40,
    marginStart: 10,
  },
});

export default AppHeader;
