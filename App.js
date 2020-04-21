import React from 'react';
import { View } from 'react-native'

import Button from './components/button';

const App = () => {
  return (
    <View style={{ paddingVertical: "50%", alignItems: 'center' }}>
      <Button label="INCREMENT" plus={true} />
      <Button label="DECREMENT" plus={false} />
    </View>
  );
}

export default App;