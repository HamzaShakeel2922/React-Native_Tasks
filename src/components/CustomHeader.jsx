import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

const CustomHeader = ({navigation, back, title}) => {
  return (
    <>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          elevation: Platform.OS === 'android' ? 1 : 0,
        }}>
        <TouchableOpacity onPress={() => back && navigation.goBack()}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/120px-Back_Arrow.svg.png"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            verticalAlign: 'middle',
            fontSize: 20,
          }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Image
            src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            style={{
              height: 30,
              width: 30,
            }}></Image>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default CustomHeader;
