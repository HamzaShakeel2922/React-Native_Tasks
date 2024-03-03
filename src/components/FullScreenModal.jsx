import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Button, Image} from '@rneui/base';
import Modal from 'react-native-modal';
import ModalArrow from '../assets/images/ModalArrow.png';
import filter from '../assets/images/filter.png';
import CheckBox from '@react-native-community/checkbox';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'New',
    isEnabled: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'In progress',
    isEnabled: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Contact Initiated',
    isEnabled: true,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282a',
    title: 'Scheduled',
    isEnabled: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91a997f63',
    title: 'Sold',
    isEnabled: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571229d72',
    title: 'No Opportunity',
    isEnabled: false,
  },
];
const FullScreenModal = () => {
  const [checkbox, setCheckbox] = useState(DATA);
  const handleCheckbox = id => {
    const newState = checkbox.map(item => {
      if (item.id === id) {
        return {...item, isEnabled: !item.isEnabled};
      }
      return item;
    });
    setCheckbox(newState);
  };
  const [isModalVisible, toggleModal] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Open Modal" onPress={() => toggleModal(true)} />
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onRequestClose={() => toggleModal(false)}
        style={{
          margin: 0,
          padding: 0,
        }}
        onBackdropPress={() => toggleModal(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: '80%',
              height: '100%',
              alignSelf: 'flex-end',
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 0.6,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity onPress={() => toggleModal(false)}>
                    <Image
                      source={ModalArrow}
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Image
                      source={filter}
                      style={{
                        height: 24,
                        width: 24,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Filter
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                  }}>
                  Status
                </Text>
              </View>
              <FlatList
                data={checkbox}
                renderItem={({item}) => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                      gap: 15,
                    }}>
                    <CheckBox
                      value={item.isEnabled}
                      onChange={() => handleCheckbox(item.id)}
                      tintColors={{true: '#23A3DA'}}
                      style={{
                        height: 18,
                        width: 18,
                      }}
                      tintColor="blue"
                    />
                    <Text>{item.title}</Text>
                  </View>
                )}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 40,
                    borderColor: '#23A3DA',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#23a3da',
                      textAlign: 'center',
                    }}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 40,
                    backgroundColor: '#23A3DA',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                    }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FullScreenModal;
