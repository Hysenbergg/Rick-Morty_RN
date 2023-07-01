import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import styles from './CharacterPage.style';

function CharacterPage({route}) {
  const {id} = route.params;
  const [data, setData] = useState({});
  const [imageSource, setImageSource] = useState(null);

  async function useFetchCharacterInfo() {
    const {data: responseData} = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    setData(responseData);
  }

  useEffect(() => {
    useFetchCharacterInfo();
  }, []);

  useEffect(() => {
    if (data.image) {
      setImageSource({uri: encodeURI(data.image)});
    }
  }, [data.image]);

  const InfoComponent = ({title, description}) => {
    return (
      <View style={styles.inner_info_container}>
        <View style={styles.info_title_cont}>
          <Text style={styles.info_title}>{title}</Text>
        </View>
        <View style={styles.info_description_cont}>
          <Text style={styles.info_desription}>{description}</Text>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={require('../../assets/rickandmorty.png')} style={styles.container}>
      <View style={styles.image_container}>
        {imageSource && <Image style={styles.image} source={imageSource} />}
        <Text style={styles.image_name}>{data.name}</Text>
      </View>
      <View style={styles.character_info_container}>
        <InfoComponent title="Species: " description={data.species} />
        <InfoComponent title="Location: " description={data.location && data.location.name} />
        <InfoComponent title="Origin: " description={data.origin && data.origin.name} />
        <InfoComponent title="Gender: " description={data.gender} />
      </View>
    </ImageBackground>
  );
}

export default CharacterPage;
