import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { setCount } from '../redux/counter/actions'

class Button extends Component {

    render() {
        const { label, count, increase, setCount } = this.props;
        return (
            <TouchableOpacity
                style={{
                    width: 250, height: 50,
                    backgroundColor: "#006DCB", justifyContent: "center",
                    alignItems: "center", marginVertical: 30, borderRadius: 10
                }}
                activeOpacity={1}
                onPress={() => setCount(increase)}
            >
                <Text style={{ color: "white", fontSize: 24 }}>{label} : {count}</Text>
            </TouchableOpacity>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCount: num => dispatch(setCount(num)),
})

const mapStateToProps = state => ({
    count: state.counter.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);