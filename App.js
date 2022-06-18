import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToglle] = useState(false);

  const handleChangeToggle = () => setToglle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
    Vibration.vibrate(1000);
  }, [toggle]);

  useEffect(() => {
    const subsciption = RNShake.addListener(() => {
      setToglle(oldToggle => !oldToggle);
      Vibration.vibrate(1000);
    });
    return () => subsciption.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toggle ? style.reactNativeOn : style.reactNativeOff}
          source={
            toggle
              ? require('./assets/icons/react-native-logo.png')
              : require('./assets/icons//react-native-logo-black.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  reactNativeOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
    width: 150,
    height: 150,
  },

  reactNativeOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    marginTop: 20,
    width: 150,
    height: 150,
  },
});
