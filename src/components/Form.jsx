import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import {Formik} from 'formik';

import {genderData, roleData, profession, address} from '../utils/constants';

const Form = () => {
  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{
          gender: '',
          name: '',
          phoneNumber: '',
          age: '',
          profession: '',
          address: '',
          role: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}>
        {({handleChange, handleSubmit, values, setFieldValue}) => (
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'column',
                padding: 20,
                gap: 20,
              }}>
              <Dropdown
                style={styles.input}
                data={genderData}
                labelField="label"
                valueField="value"
                placeholder="Gender"
                value={values.gender}
                onChange={item => setFieldValue('gender', item.value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                inputMode="text"
                onChangeText={handleChange('name')}
                value={values.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                inputMode="numeric"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Age"
                inputMode="numeric"
                onChangeText={handleChange('age')}
                value={values.age}
              />

              <Dropdown
                style={styles.input}
                data={roleData}
                labelField="label"
                valueField="value"
                placeholder="Role"
                value={values.role}
                onChange={item => setFieldValue('role', item.value)}
              />
              <Dropdown
                style={styles.input}
                data={profession}
                labelField="label"
                valueField="value"
                placeholder="Profession"
                value={values.profession}
                onChange={item => setFieldValue('profession', item.value)}
              />
              <Dropdown
                style={styles.input}
                data={address}
                labelField="label"
                valueField="value"
                placeholder="Address"
                value={values.address}
                onChange={item => setFieldValue('address', item.value)}
              />

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: 'silver',
    borderRadius: 5,
    height: 50,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default Form;
