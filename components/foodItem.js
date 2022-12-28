import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FoodItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectMovie(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    paddingLeft: 20,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 20,
  }
});
export default FoodItem;