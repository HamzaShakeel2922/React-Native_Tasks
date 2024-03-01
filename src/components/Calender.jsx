import React, {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {Calendar} from 'react-native-calendars';

const Calender = () => {
  const [isSwitchOn, toggleSwitch] = useState(false);
  const [selected, setSelected] = useState({});
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor="#fff"
        value={isSwitchOn}
        onChange={() => toggleSwitch(!isSwitchOn)}
      />
      {isSwitchOn && (
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: 'gray',
          }}
          current={'2024-03-01'}
          onDayPress={day => {
            setSelected(oldState => {
              const newState = {...oldState};
              if (newState.hasOwnProperty(day.dateString)) {
                delete newState[day.dateString];
              } else {
                newState[day.dateString] = {
                  selected: true,
                  selectedColor: 'red',
                };
              }
              return newState;
            });
          }}
          markedDates={selected}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Calender;
