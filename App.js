import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store';

import Button from './src/components/button';
import Title from './src/components/title';
import Count from './src/components/count';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <View style={{ paddingVertical: "50%", alignItems: 'center' }}>
            <Title />
            <Count />
            <Button label="INCREMENT" increase={true} />
            <Button label="DECREMENT" increase={false} />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;