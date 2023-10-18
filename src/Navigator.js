import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './views/Auth';
import Home from './views/Home';
import Details from './views/Details';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="auth" component={Auth} options={{headerShown: false}} />
        <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
