import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const MainScreen = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomButton
        title="List Task"
        onPress={() => navigation.push('ListTask')}
      />
      <CustomButton
        title="Form Task"
        onPress={() => navigation.push('FormTask')}
      />
      <CustomButton
        title="More On Forms"
        onPress={() => navigation.push('MoreOnForms')}
      />
      <CustomButton title="Modal" onPress={() => navigation.push('Modal')} />
      <CustomButton
        title="Header Task"
        onPress={() => navigation.push('Products')}
      />
      <CustomButton
        title="More On Modal"
        onPress={() => navigation.push('MoreOnModal')}
      />
      <CustomButton
        title="Custom Buttom"
        onPress={() => navigation.push('CustomButton')}
      />
    </ScrollView>
  );
};

export default MainScreen;
