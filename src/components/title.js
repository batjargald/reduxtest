import React from 'react';
import { connect } from 'react-redux';

import { Text } from 'react-native';

const Title = ({ count }) => {
    console.log(count);

    return (
        <Text style={{ fontSize: 100 }}>
            {count}
        </Text>
    );
}

const mapStateToProps = state => ({
    count: state.counter.count
});

export default connect(mapStateToProps)(Title);