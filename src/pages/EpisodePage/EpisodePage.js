import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from './EpisodePage.style';

function EpisodePage({route, navigation}) {
  const {item} = route.params;
  const [data, setData] = useState({});

  async function fetchAllData(urls) {
    const results = [];
    for (const url of urls) {
      const {data: responseData} = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      results.push(responseData);
    }
    setData(results);
  }

  useEffect(() => {
    fetchAllData(item.characters);
  }, [item.characters]);

  const CharactersPage = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card_container_touch} onPress={() => handleCharacterSelect(item.id)}>
        <View style={styles.card_container} >
          <View style={styles.card_image_container}>
            <Image style={styles.card_image} source={{ uri: encodeURI(item.image)}} />
          </View>
          <View style={styles.card_info_container}>
            <View style={styles.card_title_cont}>
              <Text style={styles.card_title}>{item.name}</Text>
            </View>
            <View style={styles.card_gender_cont}>
              <Text style={styles.card_gender}>{item.gender}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleCharacterSelect = id => {
    navigation.navigate('CharacterPage', {id});
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={CharactersPage}
      />
    </SafeAreaView>
  );
}

export default EpisodePage;
