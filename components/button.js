import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class Button extends Component {
    state = {
        count: 0
    }
    render() {
        const { count } = this.state;
        const { label, plus } = this.props;
        return (
            <TouchableOpacity
                style={{
                    width: 250, height: 50,
                    backgroundColor: "#006DCB", justifyContent: "center",
                    alignItems: "center", marginVertical: 30, borderRadius: 10
                }}
                activeOpacity={1}
                onPress={() => { this.setState({ count: plus ? count + 1 : count - 1 }) }}
            >
                <Text style={{ color: "white", fontSize: 24 }}>{label} : {count}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;