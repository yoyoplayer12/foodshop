import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import ShoppingbasketScreen from './ShoppingbasketScreen';

const FoodScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.lebutton}>
                {/* <Button
                    title="Go to Shopping Basket"
                    color={"white"}
                    onPress={() => navigation.navigate(ShoppingbasketScreen)}
                /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'top',
  },
  lebutton: {
    backgroundColor:'black',
  },
});
export default FoodScreen;

