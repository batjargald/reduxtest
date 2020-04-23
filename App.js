import React, { Component } from 'react';
import { View } from 'react-native'

import Button from './src/components/button';
import Title from './src/components/title';

class App extends Component {
  state = {
    count: 0
  }

  stateChangeHandler = plus => {
    const { count } = this.state;
    this.setState({ count: plus ? count + 1 : count - 1 })
  }
  render() {
    const { count } = this.state;
    return (
      <View style={{ paddingVertical: "50%", alignItems: 'center' }}>
        <Title title={count} />
        <Button label="INCREMENT" onStateChange={() => this.stateChangeHandler(true)} count={count} />
        <Button label="DECREMENT" onStateChange={() => this.stateChangeHandler(false)} count={count} />
      </View>
    );
  }
}

export default App;