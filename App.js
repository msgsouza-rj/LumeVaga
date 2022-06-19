import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const hundleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() =>{
    Torch.switchState(toggle);
     }, [toggle]);

     useEffect(() => {
      /**
       * Quando agitar o celular inverte o valor do toggle
       */
      
      const subscription = RNShake.addListener(() =>{
        setToggle(oldToggle => !oldToggle);
      });
      return () => subscription.remove();
     },[]);

  return <View style={toggle ? style.containerLigth : style.container} >
    <TouchableOpacity onPress={hundleChangeToggle}>

    <Image style={toggle ? style.lightingOn : style.lightingOff} 
    source={
      toggle
      ? require('./assets/icons/pir-light.png')
      : require('./assets/icons/pir-light-off.png')
    } 
    />
    <Image style={style.pirLogo} 
    source={
      toggle
      ? require('./assets/icons/logo-pir.png')
      : require('./assets/icons/logo-pir-white.png')
    } 
    />
    </TouchableOpacity>

  </View>;
};
export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'center',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'center',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  pirLogo:{
    resizeMode: 'center',
    alignSelf: 'center',
    width: 350,
    height: 350,
  },
});