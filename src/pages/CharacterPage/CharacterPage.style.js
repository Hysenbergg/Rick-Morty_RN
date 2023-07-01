import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCDB43',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_container: { margin: 10, alignItems: 'center', marginBottom: 50},
  image: {width: 250, height: 250, borderWidth: 1, borderRadius: 10},
  image_name: {fontSize: 32, color: 'black'},

  /* Character Card */
  character_info_container: {
    width: Dimensions.get('window').width / 1.5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#224243',
    backgroundColor: '#42B2C8'
  },
  inner_info_container: {flexDirection: 'row'},
  info_title_cont: {flex: 0.6},
  info_title: {margin: 12, fontSize: 15, color: 'white'},
  info_description_cont: {flex: 1, alignItems: 'center'},
  info_desription: {margin: 10, fontSize: 15, color: 'white'}
});
