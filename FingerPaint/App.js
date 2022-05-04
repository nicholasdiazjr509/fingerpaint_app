import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
     <Text style={{color: 'darkslateblue', fontSize: 30}}>Hello World</Text>
  </View>
  );
};

const styles = Stylesheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;