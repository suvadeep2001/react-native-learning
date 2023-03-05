import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

const diceOne = require('./assets/dice1.png');
const diceTwo = require('./assets/dice2.png');
const diceThree = require('./assets/dice3.png');
const diceFour = require('./assets/dice4.png');
const diceFive = require('./assets/dice5.png');
const diceSix = require('./assets/dice6.png');

const App = () => {
  const [uri, setUri] = useState(diceOne);
  const [url, setUrl] = useState(diceOne);
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  const playgame = () => {
    switch (randomNumber) {
      case 1:
        setUri(diceOne);
        setUrl(diceTwo);
        break;
      case 2:
        setUri(diceTwo);
        setUrl(diceThree);
        break;
      case 3:
        setUri(diceThree);
        setUrl(diceFour);
        break;
      case 4:
        setUri(diceFour);
        setUrl(diceSix);
        break;
      case 5:
        setUri(diceFive);
        setUrl(diceOne);
        break;
      case 6:
        setUri(diceSix);
        setUrl(diceFive);
        break;
      default:
        setUri(diceOne);
        setUrl(diceFive)
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={uri} style={styles.image} />
        <Image source={url} style={styles.image} />
        <TouchableOpacity onPress={playgame}>
          <Text style={styles.gameplayButton}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DBE29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  gameplayButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#C7C11A',
    color: '#EFF54D',
    fontWeight: 'bold',
  },
});
