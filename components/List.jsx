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

const data = [
  {
    id: 1,
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/362188677/original/fa23b64231550556b9d3197dc960cb98dc19c228/make-a-very-high-quality-game-icon-thumbnails-and-gfx.png',
    title: 'present_09.pdf',
    size: '8.2MB',
  },
  {
    id: 2,
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/362188677/original/fa23b64231550556b9d3197dc960cb98dc19c228/make-a-very-high-quality-game-icon-thumbnails-and-gfx.png',
    title: 'tactick442.jpeg',
    size: '2.9MB',
  },
  {
    id: 3,
    img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/362188677/original/fa23b64231550556b9d3197dc960cb98dc19c228/make-a-very-high-quality-game-icon-thumbnails-and-gfx.png',
    title: 'Youtube Link',
    description: 'Atletico Madrid - Possession game',
  },
];

const List = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F4F4F6',
        flex: 1,
      }}>
      <View style={styles.mainDiv}>
        <View style={styles.sectionStyle}>
          <Image source={search} style={styles.imageStyle} />
          <TextInput style={{flex: 1}} placeholder="Search" />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 25,
            marginTop: 20,
            gap: 20,
          }}>
          {data.map(item => {
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
