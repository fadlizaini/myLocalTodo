import {View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import style from './style';
import {useEffect, useState} from 'react';
import {KEY} from '@env';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

export default function Auth({navigation}) {
  const [password, setPassword] = useState('');
  useEffect(() => {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then((resultObject) => {
        const {success} = resultObject;
        if (success) {
          navigateToHome();
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  }, []);

  ReactNativeBiometrics;

  const onPressSubmit = () => {
    if (password === 'thisPassword0') {
      navigateToHome();
    }
  };

  const navigateToHome = () => {
    navigation.navigate('home', {secretKey: KEY});
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Authentication" />
      </Appbar.Header>
      <View style={style.container}>
        <TextInput
          mode="outlined"
          label={'Password'}
          onChangeText={(t) => {
            setPassword(t);
          }}
          secureTextEntry
          visible-password
        />
        <Button style={style.button} mode="contained" onPress={onPressSubmit}>
          Authenticate
        </Button>
      </View>
    </>
  );
}
