import React from 'react';
import { Text } from 'react-native';

const Title = ({ title }) => {
    return (
        <Text style={{ fontSize: 100 }}>
            {title}
        </Text>
    );
}

export default Title;