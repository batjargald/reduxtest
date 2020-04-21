import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends Component {
    render() {
        const { label, count, onStateChange } = this.props;
        return (
            <TouchableOpacity
                style={{
                    width: 250, height: 50,
                    backgroundColor: "#006DCB", justifyContent: "center",
                    alignItems: "center", marginVertical: 30, borderRadius: 10
                }}
                activeOpacity={1}
                onPress={() => onStateChange()}
            >
                <Text style={{ color: "white", fontSize: 24 }}>{label} : {count}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;