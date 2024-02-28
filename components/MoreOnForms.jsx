import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {checkboxData, radioButtonData} from '../utils/constants';
import CustomCheckBox from './Checkbox';

import {useState} from 'react';

const MoreOnForms = () => {
  const [CheckboxesState, setCheckboxesState] = useState(checkboxData);
  const [SelectedRadioButton, setSelectedRadioButton] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.heading}>
              2.How Would you rate your energy levels during today's training
              session/game?
            </Text>
            <View style={styles.checkBoxContainer}>
              {CheckboxesState.map(item => {
                return (
                  <CustomCheckBox
                    key={item.id}
                    title={item.title}
                    setCheckboxesState={setCheckboxesState}
                    CheckboxesState={CheckboxesState}
                    name={item.name}
                    id={item.id}
                    isChecked={item.isSelected}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.heading}>
              2.How Would you rate your energy levels during today's training
              session/game?
            </Text>
            <View style={styles.RadioButtonContainer}>
              {radioButtonData.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => setSelectedRadioButton(item.id)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 2,
                        margin: 5,
                      }}>
                      {SelectedRadioButton === item.id && (
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: 'green',
                          }}
                        />
                      )}
                    </View>
                    <Text>{item.label}%</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
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
  cardContent: {
    padding: 10,
  },
  heading: {
    fontWeight: '500',
    fontSize: 16,
  },
  checkBoxContainer: {
    marginTop: 10,
  },
  RadioButtonContainer: {
    marginTop: 10,
  },
});
export default MoreOnForms;
