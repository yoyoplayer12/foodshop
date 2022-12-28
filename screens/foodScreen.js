import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';
import FoodItem from '../components/foodItem';

// const Title = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title"
// const PostStatus = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title"
// const Excerpt = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=excerpt.rendered"
// const Content = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=content.rendered"
// const Id = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=id"
const Post = "https://yorickdv.be/wp-json/wp/v2/posts"
let PostNum = -1







const FoodScreen = ({ navigation }) => {
  const [foods, setFoods] = useState([]);

  const getFoodsByDefault = async () => {

    //getting title
    try {
      const response = await fetch(Post, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "food144.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      })
      const json = await response.json();
      while (PostNum < json.length - 1){
        PostNum++
        let Title = json[PostNum].title.rendered
        let Status = json[PostNum].status
        let Excerpt = json[PostNum].excerpt.rendered
        let Id = json[PostNum].id
        console.log(Title);
      }
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
        const url = encodeURI(Post + enteredText + "/");
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
          <FoodItem
            id={Id}
            title={Title}
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