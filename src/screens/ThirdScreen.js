import * as React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import Button from '../component/Button';

const ThirdScreen = ({navigation, props}) => {
  const selector = useSelector((state) => {
    return state.UserDetailReducer;
  });

  moveToNextScreen = () => {
    Alert.alert('ón Press clicked');
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.textStyling, {position: 'absolute', top: 10, right: 10}]}
        children={selector.name}
      />
      <Text style={styles.textStyling} children={'4 variations of a button'} />
      <Button
        onPress={moveToNextScreen}
        buttonName={'Press Me'}
        containerStyling={{backgroundColor: 'transparent'}}
        textStyle={{color: 'skyblue'}}
      />
      <Button
        onPress={moveToNextScreen}
        buttonName={'Press Me'}
        containerStyling={{backgroundColor: 'gray'}}
        textStyle={{color: 'skyblue'}}
      />
      <Button
        onPress={moveToNextScreen}
        buttonName={'Press Me'}
        containerStyling={{backgroundColor: 'skyblue'}}
        textStyle={{color: 'white'}}
      />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          width={'100%'}
          title="Slide me to continue"
          titleColor={'skyblue'}
          titleFontSize={16}
          railFillBackgroundColor={'skyblue'}
          railFillBorderColor={'skyblue'}
          thumbIconBackgroundColor={'skyblue'} //(Optional)
          thumbIconBorderColor="skyblue" //(Optional)
          railBackgroundColor="black" //(Optional)
          railBorderColor="silver" //(Optional)
          thumbIconComponent={() => (
            <SimpleLineIcon name={'diamond'} size={20} color={'white'} />
          )}
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
        />
      </View>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  textStyling: {
    color: 'olive',
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
});
