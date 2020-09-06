import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {isEmulator} from 'react-native-device-info';
import {useSelector} from 'react-redux';

const SecondScreen = ({navigation, props}) => {
  const selector = useSelector((state) => {
    return state.UserDetailReducer;
  });

  moveToNextScreen = () => {
    console.log('ón Press clicked');
    navigation.navigate('ThirdScreen');
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.textStyling, {position: 'absolute', top: 10, right: 10}]}
        children={selector.name}
      />

      <Text
        style={[styles.textStyling]}
        children={
          'You are using ' +
          (isEmulator ? 'emulator' : 'real device') +
          ' on ' +
          Platform.OS
        }
      />

      <Button
        onPress={moveToNextScreen}
        buttonName={'Press Me'}
        containerStyling={{backgroundColor: 'skyblue'}}
        textStyle={{color: 'black'}}
      />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyling: {
    color: 'olive',
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
});
