import React from 'react';
import { Text, View } from 'react-native';
const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Authentication</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#d5beaa',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#ff0004',
        shadowOffset: { width: 222, height: 10 },
        shadowOppacity: 0.9,
        elevation: 1
    },
    textStyle: {
        fontSize: 20
    }

};
export { Header };
