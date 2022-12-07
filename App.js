import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodScreen from './screens/foodScreen.js';
import DetailScreen from './screens/detailScreen.js';
import ShoppingBasketScreen from './screens/shoppingbasketScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="The FoodShop" component={FoodScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Shoppingbasket" component={ShoppingBasketScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});







// code van vorige apps may be interessant


    // <SafeAreaView style={styles.container}>
    //   <View>
    //     <Text>FoodShop is open!</Text>
    //   </View>
    // </SafeAreaView>




// import MoviesScreen from './screens/MoviesScreen';
// import DetailsScreen from './screens/DetailsScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Movies" component={MoviesScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }