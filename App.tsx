/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Navigator from './src/Navigator';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}

export default App;
