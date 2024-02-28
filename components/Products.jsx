import {
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ProductsData} from '../utils/constants';
const Products = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', padding: 20}}>
        {ProductsData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('About', {
                  item,
                })
              }>
              <View>
                <Image src={item.img} style={{height: 100, width: 100}} />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Products;
