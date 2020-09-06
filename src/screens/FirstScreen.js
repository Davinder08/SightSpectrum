import * as React from 'react';
import {View, Keyboard, StyleSheet, Alert, Text} from 'react-native';
import Button from '../component/Button';
import SearchComponent from '../component/SearchComponent';
import * as Constants from '../utils/Constants';

import {useSelector, useDispatch} from 'react-redux';

const FirstScreen = ({navigation, props}) => {
  const dispatch = useDispatch();
  const [userName, updateUserName] = React.useState('');

  const selector = useSelector((state) => {
    return state.UserDetailReducer;
  });

  const updateUserDetail = () => {
    return {type: Constants.UPDATING_NAME, payload: userName};
  };

  updateNameInRedux = () => {
    try {
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
    }

    if (userName == '') {
      Alert.alert('Please add name');
      return;
    }
    dispatch(updateUserDetail());
  };

  moveToNextScreen = () => {
    if (selector.name == '') {
      Alert.alert('Please add name');
      return;
    }
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <SearchComponent
        onSubmitPress={moveToNextScreen}
        onChangeTextProp={(text) => updateUserName(text)}
      />
      <Text style={styles.text} children={'Welcome ' + userName} />

      <Button
        onPress={updateNameInRedux}
        buttonName={'Save Name'}
        containerStyling={{backgroundColor: 'skyblue'}}
        textStyle={{color: 'black'}}
      />

      <Button
        onPress={moveToNextScreen}
        buttonName={'Move to next screen'}
        containerStyling={{backgroundColor: 'skyblue'}}
        textStyle={{color: 'black'}}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
});
