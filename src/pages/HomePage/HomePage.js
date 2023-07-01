import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import axios from 'axios';
import styles from './HomePage.style';

function HomePage({navigation}) {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(20);

  const handleLoading = async () => {
    try {
      const {data: responseData} = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setData(responseData.results);
      if (page === 3) {
        setTotalPages(11);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoading();
  }, [page]);

  const handleSelect = item => {
    navigation.navigate('EpisodePage', {item});
  };

  const EpisodeCard = ({item, index}) => (
    <TouchableOpacity
      style={styles.episode_card_button_container}
      key={index}
      onPress={() => handleSelect(item)}>
      <View style={styles.episode_card_title_container}>
        <Text style={styles.episode_card_title}>{item.name}</Text>
      </View>
      <View style={styles.episode_card_inner_container}>
        <Text style={styles.episode_card_episode_no}>{item.episode}</Text>
        <Text style={styles.episode_card_date}>{item.air_date}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <ImageBackground source={require('../../assets/rickandmortywallpaper.jpg')} style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={EpisodeCard}
      />

      {/* Pagination Container */}
      <View style={styles.pagination_container}>
        <TouchableOpacity
          style={styles.pagination_button}
          disabled={page === 1 ? true : false}
          onPress={() => handlePrevPage()}>
          <Text style={styles.pagination_button_text}>Previous</Text>
        </TouchableOpacity>
        <View style={styles.page_count_cont}>
          <Text style={styles.page_count}>{page}/3</Text>
        </View>
        <TouchableOpacity
          style={styles.pagination_button}
          disabled={page === 3 ? true : false}
          onPress={() => handleNextPage()}>
          <Text style={styles.pagination_button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default HomePage;

/*
<SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={EpisodeCard}
      />

      <View style={styles.pagination_container}>
        <TouchableOpacity
          style={styles.pagination_button}
          disabled={page === 1 ? true : false}
          onPress={() => handlePrevPage()}>
          <Text style={styles.pagination_button_text}>Previous</Text>
        </TouchableOpacity>
        <View style={styles.page_count_cont}>
          <Text style={styles.page_count}>{page}/3</Text>
        </View>
        <TouchableOpacity
          style={styles.pagination_button}
          disabled={page === 3 ? true : false}
          onPress={() => handleNextPage()}>
          <Text style={styles.pagination_button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
*/
