import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack.navigator';

function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
