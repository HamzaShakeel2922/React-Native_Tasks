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

import MoreOnModal from './components/MoreOnModal';
import {Text} from '@rneui/base';
import CustomButton from './components/CustomButton';

const Stack = createNativeStackNavigator();
import CustomHeader from './components/CustomHeader';

const app = () => {
  return (
    // <List />
    // <Form />
    //  <MoreOnForms />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="products">
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
      </Stack.Navigator>
    </NavigationContainer>
    // <ModalComponent />
    // <MoreOnModal />
    // <CustomButton />
  );
};

export default app;
