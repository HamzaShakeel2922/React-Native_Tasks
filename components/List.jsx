import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import search from '../assets/search.png';
import next from '../assets/next.png';
import {Listdata} from '../utils/constants';
import {useState} from 'react';

const List = () => {
  const [list, setList] = useState(Listdata);
  const [input, setInput] = useState('');
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F4F4F6',
        flex: 1,
      }}>
      <View style={styles.mainDiv}>
        <View style={styles.sectionStyle}>
          <Image source={search} style={styles.imageStyle} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            value={input}
            onChangeText={newValue => {
              setInput(newValue);
              setList(Listdata.filter(item => item.title.includes(newValue)));
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 25,
            marginTop: 20,
            gap: 20,
          }}>
          {list.length === 0 && <Text>No Record.</Text>}
          {list.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    gap: 20,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      borderRadius: 3,
                      borderColor: 'black',
                      borderWidth: 1,
                    }}
                    source={{
                      uri: item.img,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        fontWeight: 600,
                      }}>
                      {item.title}
                    </Text>
                    {item.size && <Text>{item.size}</Text>}
                    {item.description && <Text>{item.description}</Text>}
                  </View>
                </View>
                <Image
                  source={next}
                  style={{
                    height: 20,
                    width: 20,
                    justifyContent: 'flex-end',
                    borderColor: 'black',
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    padding: 20,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E9F0',
    height: 40,
    borderRadius: 50,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default List;
