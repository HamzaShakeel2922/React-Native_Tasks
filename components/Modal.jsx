import {useState} from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import PhoneInput from 'react-native-international-phone-number';
import DateTimePicker from '@react-native-community/datetimepicker';

const ModalComponent = () => {
  const [isModalOpen, toggleModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [parentName, setParentName] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleInputValue = phoneNumber => {
    setInputValue(phoneNumber);
  };

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setDate(selectedDate);
    }
    setDatePickerVisible(false);
  };

  const handleSend = () => {
    console.log(parentName, selectedCountry.callingCode, inputValue, date);
    toggleModal(!isModalOpen);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Button title="Open Modal" onPress={() => toggleModal(!isModalOpen)} />
      </View>
      <Modal visible={isModalOpen} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 500,
              width: 400,
              backgroundColor: '#7e7e7e',
              borderRadius: 10,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 20, marginVertical: 10}}>
              Request for Approval
            </Text>
            <View
              style={{
                marginVertical: 10,
                gap: 10,
              }}>
              <Text style={{fontSize: 18}}>Parent Name</Text>
              <TextInput
                inputMode="text"
                style={{
                  backgroundColor: '#f4f4f4',
                  borderRadius: 15,
                  paddingHorizontal: 20,
                }}
                value={parentName}
                onChangeText={newValue => setParentName(newValue)}
              />
              <Text style={{fontSize: 18}}>Parent Phone</Text>
              <PhoneInput
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
              />

              <Text>
                Tap 'Send Request' to send an SMS to your parent for their
                approval to join the event.
              </Text>
              <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                <Text style={{fontSize: 18}}>Date</Text>
                <View
                  style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: 15,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    marginTop: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                      }}>
                      {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </Text>
                    <Image
                      src="https://static.vecteezy.com/system/resources/previews/005/988/959/original/calendar-icon-free-vector.jpg"
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              {isDatePickerVisible && (
                <DateTimePicker
                  value={date}
                  negativeButton={{label: 'Cancel', textColor: 'red'}}
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View
              style={{
                padding: 10,
                width: 200,
                alignSelf: 'flex-end',
              }}>
              <Button title="Send Request" onPress={handleSend} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalComponent;
