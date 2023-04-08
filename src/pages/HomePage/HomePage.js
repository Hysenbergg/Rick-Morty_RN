import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

function HomePage({navigation}) {
  return (
    <SafeAreaView>
        <Text>This is Home Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EpisodePage')}>
            <Text>Go to Episode Page </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomePage