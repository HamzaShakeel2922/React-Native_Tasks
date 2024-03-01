// import {List} from './components';
import Form from './src/components/Form';
import List from './src/components/List';
import MoreOnForms from './src/components/MoreOnForms';
import Products from './src/components/Products';
import About from './src/components/About';
import Contact from './src/components/Contact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalComponent from './src/components/Modal';

import MoreOnModal from './src/components/MoreOnModal';
import {Text} from '@rneui/base';
import CustomButton from './src/components/CustomButton';

const Stack = createNativeStackNavigator();
import CustomHeader from './src/components/CustomHeader';
import MainScreen from './src/screens/MainScreen';

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="products">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ListTask" component={List} />
        <Stack.Screen name="FormTask" component={Form} />
        <Stack.Screen name="MoreOnForms" component={MoreOnForms} />
        <Stack.Screen name="Modal" component={ModalComponent} />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            header: props => <CustomHeader {...props} title="Products" />,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: props => <CustomHeader {...props} title="About" />,
          }}
        />
        <Stack.Screen name="MoreOnModal" component={MoreOnModal} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
