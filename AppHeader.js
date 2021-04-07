import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style = {{backgroundColor: 'blue'}}>
                <Text style = {styles.text}> Buzz App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        padding: 20,
        fontSize: 25,
        fontFamily: 'cursive',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});