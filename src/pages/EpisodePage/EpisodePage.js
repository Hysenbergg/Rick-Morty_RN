import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import styles from './EpisodePage.style';

function EpisodePage({ route, navigation }) {
  const { item } = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchAllData(urls) {
    setLoading(true);
    const ids = [];
    urls.map(url => {
      const matches = url.match(/\/(\d+)$/); // URL'den karakter ID'sini çıkar
      ids.push(matches[1]);
    });

    const { data: responseData } = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setData(responseData);
    setLoading(false);
  }

  useEffect(() => {
    fetchAllData(item.characters);
  }, [item.characters]);

  const CharactersPage = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card_container_touch} onPress={() => handleCharacterSelect(item.id)}>
        <View style={styles.card_container} >
          <View style={styles.card_image_container}>
            <Image style={styles.card_image} source={{ uri: encodeURI(item.image) }} />
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
    navigation.navigate('CharacterPage', { id });
  }

  return (
    <ImageBackground source={require('../../assets/rickandmorty2.jpg')} style={styles.container}>
      {
        loading ? (
          <ActivityIndicator size={"large"} style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: "auto",
          }} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={CharactersPage}
          />
        )
      }
    </ImageBackground>
  );
}

export default EpisodePage;
