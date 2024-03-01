import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ListItem} from '@rneui/themed';
import person from '../assets/images/person.png';
import arrow from '../assets/images/arrow.png';
import CheckBox from '@react-native-community/checkbox';
import send from '../assets/images/send.png';
const accordionData = [
  {
    id: 1,
    accordionTitle: 'Names',
    data: [{title: 'hamza'}, {title: 'usman'}, {title: 'ali'}],
    isExpanded: false,
  },
  //   {
  //     id: 2,
  //     accordionTitle: 'Fruits',
  //     data: [{title: 'apple'}, {title: 'mango'}, {title: 'banana'}],
  //     isExpanded: false,
  //   },
];

const Accordions = () => {
  const [Data, setData] = useState(accordionData);

  const handleToggle = targetId => {
    const newState = Data.map(item => {
      if (item.id === targetId) {
        return {...item, isExpanded: !item.isExpanded};
      }
      return item;
    });
    setData(newState);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      {Data.map(item => (
        <ListItem.Accordion
          key={item.id}
          noIcon={true}
          containerStyle={{
            padding: 0,
            margin: 0,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
          }}
          isExpanded={item.isExpanded}
          onPress={() => handleToggle(item.id)}
          content={
            <View
              style={{
                width: '90%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: '#E9E6E6',
                  padding: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <Image source={person} style={{height: 40, width: 40}} />
                  <View>
                    <Text>First Name</Text>
                    <Text>Last Name</Text>
                  </View>
                </View>
                <Image
                  source={arrow}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#E6E6E6',
                  padding: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text>Roofer :</Text>
                        <Text>Select</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text>Status :</Text>
                        <Text>New</Text>
                      </View>
                    </View>
                    <View>
                      <Text>Date</Text>
                      <Text>Down Arrow</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          }>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#E6E6E6',
              width: 334,
              justifyContent: 'space-between',
              padding: 20,
              position: 'relative',
              left: -2.6,
              top: -5,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox value={true} tintColor="blue" />
                <Text>New</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#0a0909',
              width: 331,
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
              position: 'relative',
              left: -1,
              top: -15,
              zIndex: -1,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>
                Notes:
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="Enter text here..."
                  placeholderTextColor="white"
                  style={{
                    backgroundColor: 'transparent',
                    width: '85%',
                    padding: 0,
                    paddingHorizontal: 10,
                    borderRadius: 40,
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: 1,
                  }}
                />
                <Image
                  source={send}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </View>
            </View>
          </View>
        </ListItem.Accordion>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Accordions;
