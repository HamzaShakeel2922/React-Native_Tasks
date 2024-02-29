import {View, SafeAreaView, StyleSheet} from 'react-native';
import CheckboxComponent from './Checkbox';
import RadioButtonComponent from './RadioButtonComponent';
import {checkboxData} from '../utils/constants';
import {useState} from 'react';
import {radioButtonData} from '../utils/constants';

const MoreOnForms = () => {
  const [CheckboxesState, setCheckboxesState] = useState(checkboxData);
  const [SelectedRadioButton, setSelectedRadioButton] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <CheckboxComponent
            CheckboxesState={CheckboxesState}
            setCheckboxesState={setCheckboxesState}
          />
        </View>
        <View style={styles.card}>
          <RadioButtonComponent
            SelectedRadioButton={SelectedRadioButton}
            setSelectedRadioButton={setSelectedRadioButton}
            radioButtonData={radioButtonData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8FD',
  },
  wrapper: {
    marginHorizontal: 30,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
  },

  checkBoxContainer: {
    marginTop: 10,
  },
  RadioButtonContainer: {
    marginTop: 10,
  },
});
export default MoreOnForms;
