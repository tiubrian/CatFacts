/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, version } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CatFact from './components/CatFact';

const MIN = 1;
const MAX = 71;
let init = true;
const numToPic = {
  1: require('./images/cat1.jpg'),
  2: require('./images/cat2.jpg'),
  3: require('./images/cat3.jpg'),
  4: require('./images/cat4.jpg'),
  5: require('./images/cat5.jpg'),
  6: require('./images/cat6.jpg'),
  7: require('./images/cat7.jpg'),
  8: require('./images/cat8.jpg'),
  9: require('./images/cat9.jpg'),
  10: require('./images/cat10.jpg'),
  11: require('./images/cat11.jpg'),
  12: require('./images/cat12.jpg'),
  13: require('./images/cat13.jpg'),
  14: require('./images/cat14.jpg'),
  15: require('./images/cat15.jpg'),
  16: require('./images/cat16.jpg'),
  17: require('./images/cat17.jpg'),
  18: require('./images/cat18.jpg'),
  19: require('./images/cat19.jpg'),
  20: require('./images/cat20.jpg'),
  21: require('./images/cat21.jpg'),
  22: require('./images/cat22.jpg'),
  23: require('./images/cat23.jpg'),
  24: require('./images/cat24.jpg'),
  25: require('./images/cat25.jpg'),
  26: require('./images/cat26.jpg'),
  27: require('./images/cat27.jpg'),
  28: require('./images/cat28.jpg'),
  29: require('./images/cat29.jpg'),
  30: require('./images/cat30.jpg'),
  31: require('./images/cat31.jpg'),
  32: require('./images/cat32.jpg'),
  33: require('./images/cat33.jpg'),
  34: require('./images/cat34.jpg'),
  35: require('./images/cat35.jpg'),
  36: require('./images/cat36.jpg'),
  37: require('./images/cat37.jpg'),
  38: require('./images/cat38.jpg'),
  39: require('./images/cat39.jpg'),
  40: require('./images/cat40.jpg'),
  41: require('./images/cat41.jpg'),
  42: require('./images/cat42.jpg'),
  43: require('./images/cat43.jpg'),
  44: require('./images/cat44.jpg'),
  45: require('./images/cat45.jpg'),
  46: require('./images/cat46.jpg'),
  47: require('./images/cat47.jpg'),
  48: require('./images/cat48.jpg'),
  49: require('./images/cat49.jpg'),
  50: require('./images/cat50.jpg'),
  51: require('./images/cat51.jpg'),
  52: require('./images/cat52.jpg'),
  53: require('./images/cat53.jpg'),
  54: require('./images/cat54.jpg'),
  55: require('./images/cat55.jpg'),
  56: require('./images/cat56.jpg'),
  57: require('./images/cat57.jpg'),
  58: require('./images/cat58.jpg'),
  59: require('./images/cat59.jpg'),
  60: require('./images/cat60.jpg'),
  61: require('./images/cat61.jpg'),
  62: require('./images/cat62.jpg'),
  63: require('./images/cat63.jpg'),
  64: require('./images/cat64.jpg'),
  65: require('./images/cat65.jpg'),
  66: require('./images/cat66.jpg'),
  67: require('./images/cat67.jpg'),
  68: require('./images/cat68.jpg'),
  69: require('./images/cat69.jpg'),
  70: require('./images/cat70.jpg'),
  71: require('./images/cat71.jpg'),
};
const App = () => {
  const randomNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  const [catPic, setCatPic] = useState();
  if(init) {
    setCatPic(randomNum);
    init = false;
  }
  return (
    <ImageBackground
      source={numToPic[catPic]}
      // source={require('./images/cat8.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.outerView}>
        <CatFact style={styles.catFact} 
          setCatPic={setCatPic}
        />
      </View>
     </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
