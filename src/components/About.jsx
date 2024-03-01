import {Text, View, Button, Image} from 'react-native';
import {ProductsData} from '../utils/constants';
const Home = ({route}) => {
  const {item} = route.params;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}>
        <Image
          src={item.img}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text>Id:{item.id}</Text>
        <Text>Name :{item.name}</Text>
        <Text>Price:{item.price}</Text>
        <Text>Category:{item.category}</Text>
        <Text>Stock:{item.stock}</Text>
      </View>
    </View>
  );
};

export default Home;
