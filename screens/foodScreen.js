import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import apiKey from '../apiKey';
import foodItem from '../components/foodItem';
let post_id = 1;
const Title = await fetch("https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title")
const Status = await fetch("https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title")
const FoodScreen = ({ navigation }) => {

  const [foods, setFoods] = useState([]);

  const getFoodsByDefault = async () => {
    try {
      const response = await fetch("https://yorickdv.be/wp-json/wp/v2/posts/1?_fields[]=title", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "food144.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      })
      const json = await response.json();

      console.log(json);
      setFoods(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFoodsByDefault();//laad foods wanneer het scherm laadt
  }, []);






  //laad search results wanneer je in textinput typt
  const getFoodsByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
    try {
      if (enteredText.length > 0) {
        const url = encodeURI("https://yorickdv.be/wp-json/wp/v2/posts/" + enteredText + "/");
        console.log(url);
        const response = await fetch(url, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "food144.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        })
        const json = await response.json();
        console.log(json);
        setFoods(json.results);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="search food"
        style={styles.input}
        onChangeText={getFoodsByTitleSearch}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />
      <FlatList
        data={foods}
        keyExtractor={item => item.imdb_id}//gebruik imdb_id als key voor de flatlist
        renderItem={({ item }) => (
          <foodItem
            id={item.imdb_id}
            title={item.title}
            navigation={navigation}
            onSelectMovie={(selectedId) => { navigation.navigate('Details', { movieId: selectedId }) }}
          />
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  input: {
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  }

});


// 	/**
// 	 * Filters the post title.
// 	 *
// 	 * @since 0.71
// 	 *
// 	 * @param string $post_title The post title.
// 	 * @param int    $post_id    The post ID.
// 	 */
// 	return apply_filters( 'the_title', $post_title, $post_id );

// import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
// import ShoppingbasketScreen from './ShoppingbasketScreen';

// const FoodScreen = ({navigation}) => {
//     return(
//         <SafeAreaView style={styles.screen}>
//             <View style={styles.lebutton}>
//                 {/* <Button
//                     title="Go to Shopping Basket"
//                     color={"white"}
//                     onPress={() => navigation.navigate(ShoppingbasketScreen)}
//                 /> */}
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#fff',
//     color: 'black',
//     alignItems: 'center',
//     justifyContent: 'top',
//   },
//   lebutton: {
//     backgroundColor:'black',
//   },
// });
// export default FoodScreen;

export default FoodScreen;