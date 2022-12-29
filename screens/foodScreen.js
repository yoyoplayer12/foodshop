import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';
import FoodItem from '../components/foodItem';

// const Title = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title"
// const PostStatus = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=title"
// const Excerpt = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=excerpt.rendered"
// const Content = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=content.rendered"
// const Id = "https://yorickdv.be/wp-json/wp/v2/posts?_fields[]=id"
const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"
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
        console.log("Food: " + Title);
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
        keyExtractor={item => item.food_id}//gebruik imdb_id als key voor de flatlist
        renderItem={({ item }) => (
          <FoodItem
            id={item.Id}
            title={item.Title}
            navigation={navigation}
            onSelectFood={(selectedId) => { navigation.navigate('Details', { foodId: selectedId }) }}
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

export default FoodScreen;