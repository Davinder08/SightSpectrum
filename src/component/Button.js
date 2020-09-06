import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

export default Button = React.memo((props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyling]}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <Text
        style={[styles.textStyling, props.textStyle]}
        children={props.buttonName}
      />
    </TouchableOpacity>
  );
});

Button.propsType = {
  buttonName: PropTypes.string,
  containerStyling: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  buttonName: 'Click Me ..!',
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(90,25,30,0.7)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
  },
  textStyling: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
