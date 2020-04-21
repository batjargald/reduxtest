import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Text } from 'react-native';

import { selectCount } from '../redux/counter/selector'

const Count = ({ count }) => {
    return (
        <Text style={{ fontSize: 100 }}>
            {count}
        </Text>
    );
}

const mapStateToProps = createStructuredSelector({
    count: selectCount
});

export default connect(mapStateToProps)(Count);