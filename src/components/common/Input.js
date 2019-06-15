import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ Label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { InputStyle, LabelStyle, ContainerStyle } = styles;
    return (
        <View style={ContainerStyle}>
            <Text style={LabelStyle}>{Label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={InputStyle}
                value={value}
                onChangeText={onChangeText} />
        </View>
    );
};
const styles = {
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        LineHeight: 23,
        flex: 2
    },
    LabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    ContainerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};
export { Input };