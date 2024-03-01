import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
} from 'react-native';

import icon from '../assets/images/icon.png';
import Substract from '../assets/images/Subtract.png';

const MoreOnModal = () => {
  const [isModalOpen, showModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => showModal(!isModalOpen)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => showModal(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={icon} style={styles.icon} />
          <ImageBackground source={Substract} style={styles.backgroundImage}>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad.
            </Text>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 97,
    width: 97,
    position: 'relative',
    top: 40,
  },
  backgroundImage: {
    height: 268,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    padding: 30,
    textAlign: 'center',
  },
});

export default MoreOnModal;
