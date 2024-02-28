import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckBox = props => {
  return (
    <View style={styles.row}>
      <CheckBox
        value={props.isChecked}
        onChange={() => {
          const newState = props.CheckboxesState.map(item => {
            if (item.id === props.id) {
              return {...item, isSelected: !item.isSelected};
            }
            return item;
          });
          props.setCheckboxesState(newState);
        }}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomCheckBox;
