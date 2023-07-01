import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCDB43',
  },
  episode_card_button_container: {
    flex: 1,
    margin: 10,
    padding: 8,
    backgroundColor: '#42B2C8',
    borderWidth: 1,
    borderColor: '#224243',
    borderRadius: 15,
  },
  episode_card_title_container: {
    margin: 7,
  },
  episode_card_title: {
    color: 'white',
    fontSize: 21,
  },
  episode_card_inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 7,
  },
  episode_card_episode_no: {
    fontSize: 15,
    color: 'white',
  },
  episode_card_date: {
    fontSize: 15,
    color: 'white',
  },

  // pagination container
  pagination_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pagination_button: {
    margin: 5,
    width: 100,
    backgroundColor: '#2A6574',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  pagination_button_text: {padding: 10, color: 'white', fontSize: 15},
  page_count_cont: {justifyContent: 'center', width: 50, alignItems: 'center'},
  page_count: {fontSize: 21, color: 'white', backgroundColor: '#2A6574', borderRadius: 10, padding: 5},
});
