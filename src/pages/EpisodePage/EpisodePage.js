import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

function EpisodePage({navigation}) {
  return (
    <SafeAreaView>
        <Text>This is Episode Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CharacterPage')}>
            <Text>Go to Character Page</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EpisodePage;