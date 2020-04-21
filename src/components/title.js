import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { createStructuredSelector } from 'reselect';

import { selectTitle } from '../redux/counter/selector'

const Title = ({ title }) => {
    console.log("title ", title);

    return (
        <Text style={{ fontSize: 30 }}>
            {title}
        </Text>
    );
}

const mapStateToProps = state => {
    console.log("========== select called Title ================");
    return {
        title: state.counter.title
    }
};


// const mapStateToProps = createStructuredSelector({
//     title: selectTitle
// });

export default connect(mapStateToProps)(Title);