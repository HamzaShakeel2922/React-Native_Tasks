import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import Modal from 'react-native-modal';

const ColorfullModal = () => {
  const [showModal, setShowModal] = useState(false);
  const COLOR_DATA = [
    {
      id: 1,
      color: '#ff5733',
      title: 'Coral',
    },
    {
      id: 2,
      color: '#2ecc71',
      title: 'Emerald',
    },
    {
      id: 3,
      color: '#3498db',
      title: 'Belize Hole',
    },
    {
      id: 4,
      color: '#e74c3c',
      title: 'Alizarin',
    },
    {
      id: 5,
      color: '#f39c12',
      title: 'Orange',
    },
    {
      id: 6,
      color: '#9b59b6',
      title: 'Amethyst',
    },
    {
      id: 7,
      color: '#34495e',
      title: 'Wet Asphalt',
    },
  ];
  const Item = ({color, title}) => (
    <View
      style={{
        backgroundColor: color,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: 'black'}}>{color}</Text>
      <Text style={{color: 'black'}}>{title}</Text>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Show Modal" onPress={() => setShowModal(true)} />
      <Modal
        onBackButtonPress={() => setShowModal(false)}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        style={{
          margin: 0,
          padding: 0,
        }}>
        <View
          style={{
            position: 'relative',
            flex: 1,
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}>
            <FlatList
              data={COLOR_DATA}
              renderItem={({item}) => <Item {...item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorfullModal;
