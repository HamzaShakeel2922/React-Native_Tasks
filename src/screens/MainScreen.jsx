import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {buttonsArray} from '../utils/constants';
const MainScreen = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {buttonsArray.map(item => (
        <CustomButton
          key={item.id}
          title={item.title}
          onPress={() => navigation.push(item.onPress)}
        />
      ))}
    </ScrollView>
  );
};

export default MainScreen;
