import React from 'react';
import {Text, View, TouchableOpacity, Platform, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.view}>
        <Text style={styles.buttonText}>Button</Text>
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
    width: 100,
    elevation: Platform.OS === 'android' ? 20 : 0,
    alignSelf: 'center',
    marginVertical: 100,
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
