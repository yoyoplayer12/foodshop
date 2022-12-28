
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodScreen from './screens/FoodScreen.js';
import DetailScreen from './screens/DetailScreen.js';
import ShoppingBasketScreen from './screens/ShoppingbasketScreen.js';

const Stack = createNativeStackNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="The FoodShop 🍔" component={FoodScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Shoppingbasket" component={ShoppingBasketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }







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