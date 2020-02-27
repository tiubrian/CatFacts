import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Vibration
} from 'react-native';

// import {
//   AdMobBanner, 
//   AdMobInterstitial, 
//   PublisherBanner,
//   AdMobRewarded
// } from 'react-native-admob';

import * as factList from './facts';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let initting = true;

const buzz = () => {
  if(Platform.OS === 'ios') {
    Vibration.vibrate();
  }
  else {
    const DURATION = 500; // half second
    Vibration.vibrate(DURATION);
  }
};

const MIN = 1;
const MAX = 71
let first = true;
const CatFact = (props) => {
  const [catFact, setCatFact] = useState('');

  const getCatFact = async () => {
    // buzz();
    let fact;
    const question = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // if(question === 1) {
    if(false) {
      const randomFromFactList = Math.floor(Math.random() * ((factList.default.length)-1 - 0 + 1)) + 0;
      console.log(randomFromFactList)
      fact = factList.default[randomFromFactList]
      console.log(fact)
    }
    else {
      const response = await fetch('https://catfact.ninja/fact', { method: 'GET' });
      const facts = await response.json();
      fact = facts.fact;
    }
    const randomNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    setCatFact(fact)
    if(!first) {
      props.setCatPic(randomNum);
    }
    first = false;
  };
  if(initting) {
    initting = false;
    getCatFact();
  }
  return (
    <View style={styles.outer}>
      {/* <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="your-admob-unit-id"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={(e) => console.log(e)} /> */}
      <View style={styles.textView}>
        <Text styles={styles.catText}>
          {catFact}
        </Text>
      </View>
      <View style={styles.catFactButton}>
        <View style={styles.buttonBorder}>
          <Button title="Get Cat Fact!" onPress={() => getCatFact()}/>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  outer: {
    padding: 20,
    alignSelf: 'stretch' 
  },
  catText: {
    color: 'red',
    fontSize: 100,
    fontWeight: 'bold'
  },
  textView: {
    backgroundColor: '#f0e9d899',
    padding: 15,
    borderRadius: 150 / 10,
  },
  catFactButton: {
    paddingTop: 30,
    alignSelf: 'stretch' 
  },
  buttonBorder: {
    backgroundColor: '#f8f8f899',
    borderRadius: 150 / 5,
  }
});

export default CatFact;