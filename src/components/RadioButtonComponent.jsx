import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const RadioButtonComponent = ({
  SelectedRadioButton,
  setSelectedRadioButton,
  radioButtonData,
}) => {
  return (
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

export default RadioButtonComponent;
