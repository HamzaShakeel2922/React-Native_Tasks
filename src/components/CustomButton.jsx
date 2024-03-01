import React from 'react';
import {Text, View, TouchableOpacity, Platform, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress ? onPress : undefined}>
      <View style={styles.view}>
        <Text style={styles.buttonText}>{title ? title : 'Button'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowRadius: 20,
    elevation: Platform.OS === 'android' ? 20 : 0,
    alignSelf: 'center',
    minWidth: 150,
  },
  view: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CustomButton;
