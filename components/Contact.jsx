import {Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 40,
        }}>
        Contact Screen
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Home;
