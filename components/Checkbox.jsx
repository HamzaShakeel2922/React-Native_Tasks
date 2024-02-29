import {Text, View, StyleSheet} from 'react-native';
import CustomCheckBox from './CustomCheckbox';

const CheckboxComponent = props => {
  const {CheckboxesState, setCheckboxesState} = props;
  return (
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
  );
};
const styles = StyleSheet.create({
  cardContent: {
    padding: 10,
  },

  heading: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default CheckboxComponent;
