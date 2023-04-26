import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useResetRecoilState } from 'recoil';
import { errorState, loadingState, recNumberState, recommendationsState, watchedMoviesState } from '../atoms';

const AppHeader = () => {
  const resetMovies = useResetRecoilState(watchedMoviesState);
  const resetRecommendations = useResetRecoilState(recommendationsState);
  const resetRecNumber = useResetRecoilState(recNumberState);
  const resetIsLoading = useResetRecoilState(loadingState);
  const resetErrors = useResetRecoilState(errorState);
  const navigation = useNavigation();

  const handleHomePress = () => {
    resetMovies()
    resetRecommendations()
    resetRecNumber()
    resetIsLoading()
    resetErrors()
    navigation.navigate('Home');
  };

  return (
    <LinearGradient colors={['#353535', '#222222']}>
      <Header
      leftComponent={
        <View >
        <Image
            source={require('../assets/logo_name.png')}
            style={styles.image}
        />
        </View>
      }
      rightComponent={
        <View style={styles.questionMarkView}>
        <Icon
            name='home'
            type='font-awesome'
            color='#fff'
            onPress={handleHomePress}
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
