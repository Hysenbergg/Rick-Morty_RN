import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {flex: 1, backgroundColor: '#BCDB43', position: 'relative'},

    /* Card Component */
    card_container_touch: {flex: 1},
    card_container: {flex: 1, margin: 10, flexDirection: 'row', borderWidth: 1, borderRadius: 15, backgroundColor: '#42B2C8'},
    card_image_container: {flex: 0.5, padding: 5},
    card_image: {width: 100, height: 100, borderRadius: 50},
    card_info_container: { flex: 1 },
    card_title_cont: { flex: 1, justifyContent: 'center', marginLeft: 10 },
    card_title: {color: 'white', fontSize: 21},
    card_gender_cont: { flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'},
    card_gender: {padding: 10, fontSize: 15, color: 'white'}
})