// import {List} from './components';
import Form from './components/Form';
import List from './components/List';
import MoreOnForms from './components/MoreOnForms';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalComponent from './components/Modal';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <List />
    //<Form />
    // <MoreOnForms />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="products">
    //     <Stack.Screen name="Products" component={Products} />
    //     <Stack.Screen name="About" component={About} />
    //     {/* <Stack.Screen name="Contact" component={Contact} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <ModalComponent />
  );
};

export default app;
