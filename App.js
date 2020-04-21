import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/redux/store';

import Button from './src/components/button';
import Title from './src/components/title';
import Count from './src/components/count';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ paddingVertical: "50%", alignItems: 'center' }}>
          <Title />
          <Count />
          <Button label="INCREMENT" increase={true} />
          <Button label="DECREMENT" increase={false} />
        </View>
      </Provider>
    );
  }
}

export default App;